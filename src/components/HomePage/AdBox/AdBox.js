import React from 'react'
import MainHeader from '../../Headings/MainHeader/MainHeader'
import './AdBox.css'


function AdBox() {
    return (
        <div className='row mx-0 my-5 justify-content-around'>
            <div className='col-12 mb-4'>
                <MainHeader text="Specijalna ponuda" />
            </div>

             <div className='col-lg-6 col-11 box imgBox'>
            </div>
            <div className='col-lg-6 col-12 box imgBox2'>
                
            </div>
            
        </div>
    )
}

export default AdBox
