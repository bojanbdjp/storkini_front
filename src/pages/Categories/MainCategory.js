import api from '../../env'
import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Loader from "react-js-loader";

import ObjCard from '../../components/Categories/Cards/ObjCard'
import './MainCategory.css'
import SpecialCategories from '../../components/SpecialCategories/SpecialCategories';

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

    return (
        <div className='col-12'>
            <div className="row" style={{marginTop: '10px'}}>
                <div className='col-12 heading text-center'>
                    <h2 className='m-0 heading-text '>{location.state != null ? location.state.categoryName : ''}</h2>
                </div>

            
                {!loaded 
                ? <Loader type="bubble-loop" bgColor={"#003b95"} color={'#003b95'} size={100} /> 
                : <div className="col-12 my-3">
                    <div className="row">
                    {specialCatgs ? <SpecialCategories bigObj={objs} /> : elems}
                        
                    </div>
                </div> }
            </div>
        </div>
    )
}

export default MainCategory