import React, {useEffect, useState} from 'react'
import './Object.css'
import { useParams } from 'react-router-dom';
import api from '../../env'
import CardLayout from '../../components/ObjectsCard/CardLayout/CardLayout';
import { Loader } from 'rsuite';

function Objectasa() {
    let params = useParams();
    const [obj, setobj] = useState(null)

    useEffect(() => {
        
        api.get('/getByName', {
            params: {
              name: params.objName,
            }
          })
        .then(res => {
            console.log(res)
            if(res.data.length > 0) {
                setobj(res.data[0])
            } else {
                setobj({name: "", description: ""})
            }
            
         })
        .catch(err => console.log("greska: ", err))
    }, [])

        
    

    return (
        <div className='mainObjDiv'>
            {obj != null ?
            <CardLayout obj={obj}/>
            :
            <div className='row' style={{marginTop: '30vh'}}>
                <div className='col-12 text-center'>
                <Loader size="lg" />

                </div>
            </div>
            }
        </div>
    )
}

export default Objectasa
