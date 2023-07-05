import React from 'react'
import BasicInfoCard from '../BasicInfoCard/BasicInfoCard'
import DetailsCard from '../DetailsCard/DetailsCard'
import ImageCard from '../ImageCard/ImageCard'
import MapCard from '../MapCard/MapCard'
import './CardLayout.css'

function CardLayout({obj}) {
    console.log("test ", obj)
    return (
        <div className='row'>
            <BasicInfoCard obj={obj}/>
            <ImageCard obj={obj}/>
            <MapCard  obj={obj}/>
             {/* col-5 i col-6 kad nema detalja */}
            {obj.paidOffer == 1 ? <DetailsCard  obj={obj}/> : ""}
        </div>
    )
}

export default CardLayout
