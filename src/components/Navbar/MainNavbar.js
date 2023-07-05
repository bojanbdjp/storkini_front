import React, { useState } from 'react'
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import './Navbar.css'
import logo from '../../img/logo/logo-white.png'
import MobNavbar from './MobNavbar/MobNavbar'
import DesktopNav from './DesktopNav';
import { Link } from 'react-router-dom'

function MainNavbar() {
    const [expanded, setExpanded] = useState(false)

    

    let width = window.innerWidth;

    let chooseNav;
    +width > 500 ? chooseNav = <DesktopNav/> : chooseNav = <MobNavbar setExpanded={setExpanded} expanded={expanded}/>

   

    return (
        <Navbar  expand="md" className="mainNavbar" expanded={expanded} >
            <Container fluid>
                <Navbar.Brand className="logoText"><Link to="/" > <img src={logo} className="logoImg"/></Link></Navbar.Brand>
                {chooseNav}
                
                

                
                
            </Container>
        </Navbar>
    )
}

export default MainNavbar
