import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import map from '../../../img/serbia_map.png'
import './MapModal.css'
import Input from 'rsuite/Input';
import InputGroup from 'rsuite/InputGroup';
import SearchIcon from '@rsuite/icons/Search';
import SerbiaMap from './SerbiaMap';

function MapModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mainModal"
        >
        {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
            </Modal.Title>
        </Modal.Header> */}
        <Modal.Body >
            <div className="row">
                <div className="col-12 ">
                <InputGroup className="mapInput m-2 mx-auto" >
                <Input placeholder="Ukucajte mesto ili izaberite na mapi"/>
                <InputGroup.Button >
                    <SearchIcon style={{fontSize: '1.7em'}}/>
                </InputGroup.Button>
            </InputGroup>
                </div>

                <div className="col-12 text-center serbiaMap">
                    <SerbiaMap />
                </div>

            </div>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
    )
}

export default MapModal
