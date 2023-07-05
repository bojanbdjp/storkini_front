import React from 'react'
import { Card } from 'react-bootstrap'

function DetailsCard({obj}) {
    return (
        <div className='col-12 col-lg-3' style={{marginBottom: '1rem'}}>
                <Card className='card-style'>
                    <Card.Body>
                        <Card.Title style={{marginBottom: '2vh'}}>Detalji</Card.Title>
                        <div>{obj.details}</div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default DetailsCard
