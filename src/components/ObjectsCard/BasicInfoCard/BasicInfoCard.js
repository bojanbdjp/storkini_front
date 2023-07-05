import React from 'react'
import './BasicInfoCard.css'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

function BasicInfoCard({obj}) {
    
    var keywords;
    {obj.keywords[0] != "" ? keywords =
                        <div className='col-lg-6 col-12'>
                            <span className='span-info'>{obj.keywords[0]}</span>
                            <span className='span-info sinfo'>{obj.keywords[1]}</span>
                            <span className='sinfo'>{obj.keywords[2]}</span>
                        </div>
                        : keywords = undefined}

    return (
        <div className='col-12 my-3'>
            <Card className='basic-card-style'>
                <Card.Body>
                    <h1 style={{marginBottom: '0.5vh'}}>{obj.objName}</h1>
                    <div className='row'>
                    { obj.paidOffer == 1 ? <span>
                        <div className='col-12 my-1' style={{paddingRight: '1px'}} >
                            {obj.description}
                        </div>
                        
                        <div className='col-lg-2 col-12 marks' style={{paddingRight: '0px!important'}}>
                            <span >
                            <FontAwesomeIcon icon={faStar} className="icon"/>
                            <FontAwesomeIcon icon={faStar} className="icon"/>
                            <FontAwesomeIcon icon={faStar} className="icon"/>
                            <FontAwesomeIcon icon={faStar} className="icon"/>
                            <FontAwesomeIcon icon={faStarHalf} className="icon"/>
                            {obj.keywords != undefined && obj.keywords[0] != "" ? "4.5/5" : '' }
                            </span>
                        </div>
                        {keywords} 
                         </span> : '' }
                        

                    </div>
                    
                </Card.Body>
            </Card>
    </div>
    )
}

export default BasicInfoCard
