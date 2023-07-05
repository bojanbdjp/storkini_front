import React from 'react'
import './ImageCard.css'
import { Card } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCard({obj}) {

    const images = obj.images.map(img => {
        return <div>
            <img src={img} key={img}/>
        </div>
    })

    return (
        <div className={obj.paidOffer == 1 ? `col-lg-5 col-12` : `col-lg-7 col-12`} style={{marginBottom: '1rem'}}>
            <Card className='card-style'>
                <Card.Body>
                    <Card.Title style={{marginBottom: '2vh'}}>Slike</Card.Title>
                    <div className='row mx-auto' >

                        <Carousel>
                            {images}
                        </Carousel>

                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ImageCard
