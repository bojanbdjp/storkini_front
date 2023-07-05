import api from '../../env'
import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { useParams, useLocation } from 'react-router-dom';

import ObjCard from '../../components/Categories/Cards/ObjCard'
import './MainCategory.css'
import SpecialCategories from '../../components/SpecialCategories/SpecialCategories';

function MainCategory(props) {
    
    let params = useParams();
    let location = useLocation();
    const [objs, setobjs] = useState({arr1: []})


    useEffect(() => {

        api.get('/getCatgByName', {
            params: {
                catg: params.catgId,
            }
        })
        .then(res => {
            console.log(res)
            console.log("Rezultati" , res.data)
            if(res.data != undefined && res.data.message != "Nema rezultata") {
                setobjs(res.data)
            } else {
                setobjs({arr1: []})
            }
            
        })
        .catch(err => console.log("greska: ", err))
        
        console.log(location.state);

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

            
            
                <div className="col-12 my-3">
                    <div className="row">
                    {specialCatgs ? <SpecialCategories bigObj={objs} /> : elems}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCategory