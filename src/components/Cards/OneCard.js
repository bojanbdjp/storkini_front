import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faMapPin, faUtensils } from '@fortawesome/free-solid-svg-icons'
import './OneCard.css'

function OneCard({rest}) {
    return (
        <div className="col-sm-12 col-xl-3 border mx-3" style={{height: '40vh'}}>
            <div className="row">
                <div className="col-12 imgDiv text-end" style={{ backgroundImage: `url(${rest.img})`}}>
                {/* <FontAwesomeIcon icon={faUtensils} className="iconType p-3" size="lg" /> */}
                    
                </div>
                <div className="col-12">
                    <h4>{rest.name}</h4>
                </div>
                <div className="col-6 pt-1">
                    <FontAwesomeIcon icon={faMapPin} style={{color: '#0044a6'}} />
                    <p className="d-inline"> {rest.place}</p>
                </div>
                <div className="col-6 text-end">
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    <FontAwesomeIcon icon={faStarHalf} className="icon"/>
                </div>
                <div className="col-12 pt-1">
                    <p>{rest.opis}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default OneCard
