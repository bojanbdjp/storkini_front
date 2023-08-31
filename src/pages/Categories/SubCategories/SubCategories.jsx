import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../../../components/HomeCategories/HomeCategories.css'
import Loader from "react-js-loader";

    const subCatArray = [
        [
            {linkId: 22,  cssId: 'school-box', name: 'Škola', img: '123'},
            {linkId: 21,  cssId: 'kinder-box', name: 'Vrtić', img: '123'},
            {linkId: 23,  cssId: 'lang-box', name: 'Strani jezik', img: '123'},
            {linkId: 25,  cssId: 'art-box', name: 'Umetnost', iMg: '123'},
            {linkId: 26,  cssId: 'pris-box', name: 'Pripreme za školu', img: '123'},
            {linkId: 27,  cssId: 'prif-box', name: 'Pripreme za fakultet', img: '123'},
        ],
        [
            {linkId: 14,  cssId: 'food-box', name: 'Hrana', img: '123'},
            {linkId: 13,  cssId: 'photo-box', name: 'Fotograf', img: '123'},
            {linkId: 12,  cssId: 'music-box', name: 'Muzika', img: '123'},
            {linkId: 15,  cssId: 'sweet-box', name: 'Poslastičarnice', img: '123'},
            {linkId: 11,  cssId: 'place-box', name: 'Prostori', img: '123'},
        ],
        [
            {linkId: 31,  cssId: 'toys-box', name: 'Igračke', img: '123'},
            {linkId: 32,  cssId: 'baby-box', name: 'Baby oprema', img: '123'},
            {linkId: 33,  cssId: 'clo-box', name: 'Garderoba', img: '123'},
            {linkId: 34,  cssId: 'pans-box', name: 'Knjižare', img: '123'},
        ],
        [
            {linkId: 52,  cssId: 'medi-box', name: 'Apoteke', img: '123'},
            {linkId: 51,  cssId: 'private-box', name: 'Privatne klinike', img: '123'},
            {linkId: 53,  cssId: 'state-box', name: 'Državne ustanove', img: '123'},
        ],
        [
            {linkId: 42,  cssId: 'sport-school-box', name: 'Škole sporta', img: '123'},
            {linkId: 41,  cssId: 'pools-box', name: 'Bazeni', img: '123'},
        ]
    ]

function SubCategories() {
    let { subId } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 800);
    }, [])

    return (
        <>
            {!loaded ? <Loader type="bubble-loop" bgColor={"#003b95"} color={'#003b95'} size={100} /> 
            : ( 
            <div className='main-categories-div'>
                {subCatArray[subId].map(subCategory => {
                    return  <div className='cat-outer-box'>
                    <Link to={`/catg/${subCategory.linkId}`} state={{categoryName: subCategory.name}}>
                        <div id={subCategory.cssId} className='cat-box'></div>
                        <div className='cat-heading'><h1 >{subCategory.name}</h1></div>
                    </Link>
                </div>
                })}
            </div>
            )}
        </>
    )
}

export default SubCategories