import React from 'react'
import './Outline.css'
import Navbar from './../Navbar/MainNavbar';
import Footer from './../Footer/Footer'
import { Outlet } from 'react-router-dom';

function Outline() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-0">
                    <Navbar />
                </div>
            </div>
            <div className="row main">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default Outline
