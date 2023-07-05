import React from 'react'
import rest1 from '../../img/restorani/rest1.jpg'
import rest2 from '../../img/restorani/rest2.jpg'
import rest3 from '../../img/restorani/rest3.jpg'
import OneCard from './OneCard'

function ObjCards() {

    const restaurants = [{id: 1, name: "Institucija", place: "Novi Beograd", img: rest1, opis: "Mediterranean, Barbecue, Central European"}, 
                        {id: 2, name: "Shootiranje", place: "Zeleni venac", img: rest2 , opis: "Bar, shoots, cocktails"},
                        {id: 2, name: "Franš", place: "Vracar", img: rest3, opis:"International, Mediterranean, European" }]

    let cards = restaurants.map(el => {
        return <OneCard key={el.id} rest={el} />
    })
    return (
        <div className="row my-4 justify-content-center">
            {cards}
            
        </div>
    )
}

export default ObjCards
