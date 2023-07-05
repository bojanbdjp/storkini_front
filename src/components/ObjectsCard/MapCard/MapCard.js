import React from 'react'
import './MapCard.css'
import { Button, Card } from 'react-bootstrap'
import MapContainer from '../MapContainer/MapContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function MapCard({obj}) {
    return (
        <div className={obj.paidOffer == 1 ? `col-lg-4 col-12` : `col-lg-5 col-12`} style={{marginBottom: '1rem'}}>
                <Card className='card-style'>
                    <Card.Body>
                        <Card.Title style={{marginBottom: '2vh'}}>Lokacija</Card.Title>
                        { obj.paidOffer == 1 ?
                       <div>
                            <MapContainer />
                        </div>
                        : "" }
                        <div className='row' style={{marginTop: '3vh'}}>
                            <div className='col-12 m-1 text-center'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: '#1d1e1f'}}/> 
                            <span className='px-2 sm-text'>{obj.address}</span>
                            </div>
                            
                            <div className='brake-line col-8 mx-auto'></div>

                            <div className='col-12 m-1 text-center'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{color: '#1d1e1f'}}/> 
                            <span className='px-2 sm-text'>{obj.phoneNumber}</span></div>
                            { obj.paidOffer == 1 || obj.paidOffer == 2 ? <span>
                            <div className='brake-line col-8 mx-auto'></div>

                            <div className='col-12 m-1 text-center'>
                            <FontAwesomeIcon icon={faDesktop} style={{color: '#1d1e1f'}}/> 
                            <span className='px-2 sm-text'><a href={obj.website}>Website</a></span></div>
                            </span> : "" }
                        </div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default MapCard
