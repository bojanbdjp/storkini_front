import React from 'react'
import './MainHeader.css'

function MainHeader({text}) {
    return (
        <div className='row mx-0'>
            <div className='col-6 mx-auto text-center'>
                <h2 className='fonthead'>{text}</h2>
            </div>
        </div>
    )
}

export default MainHeader 