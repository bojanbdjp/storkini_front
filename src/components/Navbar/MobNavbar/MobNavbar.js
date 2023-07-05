import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import  Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './MobNavbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function MobNavbar({setExpanded, expanded}) {
    return (
        <>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setExpanded(expanded ? false : true)}/>
                
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                <Offcanvas.Header >
                    <Offcanvas.Title id="offcanvasNavbarLabel">Storkini</Offcanvas.Title>
                    <FontAwesomeIcon icon={faTimes} style={{color: '#1d1e1f'}} onClick={() => setExpanded(false)}/> 
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3" >
                    <ul className='ul-menu'>
                    <Link to={`/about`}><li className='list-item hvr-grow d-block' onClick={() => setExpanded(false)}>O nama</li></Link>
                    <li className='list-item hvr-grow d-block'>Marketing</li>
                    <Link to={`/contact`}><li className='list-item hvr-grow d-block' onClick={() => setExpanded(false)}>Kontakt</li></Link>
                    <Link to={`/admin`}><li className='list-item hvr-grow d-block' onClick={() => setExpanded(false)}>Prijavi se</li></Link>
                </ul>
                   
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Ukucajte ime objekta"
                        className="me-2 mt-3"
                    />
                    <Button className="mt-3" variant="secondary">Pretraga</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>  
        </>
    )
}

export default MobNavbar
