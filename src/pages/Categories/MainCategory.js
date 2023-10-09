import api from '../../env'
import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Loader from "react-js-loader";

import ObjCard from '../../components/Categories/Cards/ObjCard'
import './MainCategory.css'
import SpecialCategories from '../../components/SpecialCategories/SpecialCategories';
import LeftFilter from '../../components/LeftFilter/LeftFilter';

function MainCategory(props) {
    
    let params = useParams();
    let location = useLocation();
    const [objs, setobjs] = useState({arr1: []})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        api.get('/getCatgByName', {
            params: {
                catg: params.catgId,
            }
        })
        .then(res => {
            if(res.data != undefined && res.data.message != "Nema rezultata") {
                setobjs(res.data)
            } else {
                setobjs({arr1: []})
            }
            setLoaded(true);
            
        })
        .catch(err => console.log("greska: ", err))
        
        return () => {
            
        }
    }, [])

    let elems;
    let specialCatgs;
    let names = [];
    if(objs.arr2 != undefined) {
        specialCatgs = true;
        
    } else if (objs.arr1 != undefined ) {
        console.log("usao u else",  params.catgId)
        elems = objs.arr1.map(el => {
            return <ObjCard item={el}/>
        })
    }

    const [filterOptions, setFilterOptions] = useState({
        schoolType: [],
        schoolOwnership: [],
        location: []
    });

    console.log(filterOptions)
    
    const handleFilterChange = (newFilterOptions) => {
        setFilterOptions(newFilterOptions);
        // You can perform additional actions here, like fetching filtered data from an API
        
        
        api.post('/filterObjects', {
            catg: params.catgId,
            filterOptions: newFilterOptions,
        })
        .then(res => {
            if(res.data != undefined && res.data.message != "Nema rezultata") {
                setobjs(res.data)
            } else {
                setobjs({arr1: []})
            }
            setLoaded(true);
            
        })
        .catch(err => console.log("greska: ", err))
    };

    return (
        <div className='col-12'>
            <div className="row" style={{marginTop: '10px'}}>
                <div className='col-12 heading text-center'>
                    <h2 className='m-0 heading-text '>{location.state != null ? location.state.categoryName : ''}</h2>
                </div>

                <div className="parent-container">
                    {(params.catgId == 21 || params.catgId == 22) ? (
                    <div className="filter-container">
                        <LeftFilter filterOptions={filterOptions} onFilterChange={handleFilterChange} catgId={params.catgId}/>
                    </div>)
                    : <></>}

                    <div className='right-content'>

                        {!loaded 
                        ? <Loader type="bubble-loop" bgColor={"#003b95"} color={'#003b95'} size={100} /> 
                        : <div className="col-12 my-3">
                            <div className="row">
                            {specialCatgs ? <SpecialCategories bigObj={objs} /> : elems}
                                
                            </div>
                        </div> }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MainCategory