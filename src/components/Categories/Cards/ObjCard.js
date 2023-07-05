import React from 'react'
import { Link } from 'react-router-dom'
import './ObjCard.css'
import api from  '../../../env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin} from '@fortawesome/free-solid-svg-icons'


function ObjCard({item}) {

    const style = {
        backgroundImage:  `url(${item.images[0]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '30vh'
    }

    
    return (
        <div className='col-6 col-lg-3 objCard px-0 hvr-hang'  key={item.objName}>
                <Link to={`/obj/${item.objName}`}>
                <div style={style}></div>

                <div className='objName'>
                    <h4>{item.objName}</h4> 
                    <p><FontAwesomeIcon icon={faMapPin}  className='objCardIcon'/> {item.municipality}  </p> 
                
                </div>
            </Link>
        </div>
       
    )
}

export default ObjCard
