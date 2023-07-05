import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../env'
import ObjCardForDelete from '../../../components/Categories/Cards/ObjCardForDelete'
import AdminLogin from '../AdminLogin/AdminLogin'

function AdminDeleteObj() {
    const [objs, setobjs] = useState([])

    useEffect(() => {
        api.get('/getAllForDelete', )
        .then(res => {
            console.log(res)
            if(res.data != undefined && res.data.message != "Nema rezultata") {
                setobjs(res.data)
            } else {
                setobjs([])
            }
            
         })
        .catch(err => console.log("greska: ", err))


        return () => {
            
        }
    }, [])

    let elems = []
    elems = objs.map(el => {
        return <ObjCardForDelete item={el} />
    })

    return (
        <div>
            <div className='col-12 heading text-center my-3'>
                <h2 className='m-0 heading-text '>Brisanje objekata</h2>
            </div>

            <div className="col-12 my-3">
                    <div className="row">
                    {elems}
                        
                    </div>
                </div>

        </div>
    )
}

export default AdminDeleteObj
