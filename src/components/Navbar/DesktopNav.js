import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import gblogo from '../../img/gb.png'
import '../Navbar/Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import '../../../node_modules/hover.css/css/hover.css'

function DesktopNav() {
    return (
            <Navbar.Collapse className="" expand={false} >
                <Nav className="m-auto">
                <div className='col-12 text-menu'>
                
                    <ul className='ul-menu'>
                        <Link to={`/about`}><li className='list-item hvr-grow'>O nama</li></Link>
                        <li className='list-item hvr-grow'>Marketing</li>
                        <Link to={`/contact`}><li className='list-item hvr-grow'>Kontakt</li></Link>
                    </ul>
                </div>
                {/* <div className='col-3 mx-3'>
                    <SearchBar />

                </div> */}
                <div className='col-4 icons-menu'>

            
                <Link to={`/admin`}><button className='btn btn-outline-light'>Prijavi se</button></Link>
                    {/* <img src={gblogo} alt="logo" className="langImg mx-3"></img> */}

                </div>
                </Nav>

                    

         
            </Navbar.Collapse>  
    )
}

export default DesktopNav
