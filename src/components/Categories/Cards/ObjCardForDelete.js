import React from 'react'
import { Link } from 'react-router-dom'
import './ObjCard.css'
import api from  '../../../env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faTrash} from '@fortawesome/free-solid-svg-icons'


function ObjCard({item, deletePos}) {

    const style = {
        backgroundImage:  `url(${item.images[0]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '30vh'
    }

    const deleteObj = () => {
        api.get('/deleteObjByName',{
            params: {
              name: item.objName,
            }
          } )
        .then(res => {
            window.location.reload(false);
            
         })
        .catch(err => console.log("greska: ", err))
    }
    return (
        <div className='col-6 col-lg-3 objCard px-0'  key={item.objName}>
                <div style={style}></div>
                <div className='objName'>
                    <FontAwesomeIcon icon={faTrash} className='trashIcon fa-2x' onClick={deleteObj}/>
                    <h4>{item.objName}</h4> 
                    <p><FontAwesomeIcon icon={faMapPin}  className='objCardIcon'/> {item.municipality}  </p> 
                    
                </div>
        </div>
       
    )
}

export default ObjCard
