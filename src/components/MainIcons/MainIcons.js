import React, {useState} from 'react'
import './MainIcons.css'
import '../../../node_modules/hover.css/css/hover.css'

import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
import MapModal from '../Modals/MapModal/MapModal'
import { Link } from 'react-router-dom';

function MainIcons() {
    const [toggle, setToggle] = useState("")
    const [modalShow, setModalShow] = React.useState(false);


    const toggleClass = (element) => {
        switch(element) {
            case "rodjendan":
                setToggle("rodjendan");
                break;
            case "edukacija": 
                setToggle("edukacija");
                break;
            case "kupovina": 
                setToggle("kupovina");
                break;
            case "sport": 
                setToggle("sport");
                break;
            case "zdravstvo": 
                setToggle("zdravstvo");
                break;

        }
            
    }

    return (
        <>
        <Grid fluid className={` ${toggle != "" ? toggle : ""} categoryGrid`}>

            <Row className="show-grid">
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={8} lg={4} className="oneCol mainCategory edukacBack hvr-float" onMouseEnter={() => toggleClass("edukacija")}>
                    <p className="gridText">Edukacija</p>
                </Col>
            </Row> 

            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/21`} state={{categoryName: "Vrtići"}} className='edukacija'>Vrtić</Link></div></Col>
                <Col xs={8} lg={4} className="oneCol mainCategory rodjendanBack hvr-float" onMouseEnter={() => toggleClass("rodjendan")}>
                    <p className="gridText">Rodjendan</p>
                </Col>
            </Row> 


            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/22`} state={{categoryName: "Škole"}} className='edukacija'>Škola</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "rodjendan" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/14`} state={{categoryName: "Hrana za rodjendan"}} className='rodjendan'>Hrana</Link></div></Col>
                <Col xs={8} lg={4} className="oneCol mainCategory kupovinaBack  hvr-float" onMouseEnter={() => toggleClass("kupovina")}>
                    <p className="gridText">Kupovina</p>
                </Col>

            </Row> 

            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/23`} state={{categoryName: "Strani jezik"}} className='edukacija'>Strani jezik</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "rodjendan" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/13`} state={{categoryName: "Fotografi za rodjendan"}} className='rodjendan'>Fotograf</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "kupovina" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/31`} state={{categoryName: "Igračke"}} className='kupovina'>Igračke</Link></div></Col>
                <Col xs={8} lg={4}className="oneCol mainCategory zdravstvoBack hvr-float " onMouseEnter={() => toggleClass("zdravstvo")}>
                    <p className="gridText">Zdravstvo</p>
                </Col>
               
            </Row> 

            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/25`} state={{categoryName: "Umetnost"}} className='edukacija'>Umetnost</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "rodjendan" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/12`} state={{categoryName: "Muzika za rodjendan"}} className='rodjendan'>Muzika</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "kupovina" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/32`} state={{categoryName: "Baby oprema"}} className='kupovina'>Baby oprema</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "zdravstvo" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/52`} state={{categoryName: "Apoteke"}} className='zdravstvo'>Apoteke</Link></div></Col>


                <Col xs={7} lg={4} className="oneCol mainCategory sportBack  hvr-float" onMouseEnter={() => toggleClass("sport")}>
                    <p className="gridText">Sport</p>
                </Col>

            </Row> 

            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/26`} state={{categoryName: "Priprema za škole"}} className='edukacija'>Priprema za škole</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "rodjendan" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/15`} state={{categoryName: "Poslastičarnice"}} className='rodjendan'>Poslastičarnice</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "kupovina" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/33`} state={{categoryName: "Garderoba"}} className='kupovina'>Garderoba</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "zdravstvo" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/51`} state={{categoryName: "Privatne klinike"}} className='zdravstvo'>Privatne klinike</Link></div></Col>

                <Col xs={4} className="oneCol"><div className={`${toggle == "sport" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/42`} state={{categoryName: "Škole sporta"}} className='sport'>Škole sporta</Link></div></Col>

            </Row>

            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "edukacija" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/27`} state={{categoryName: "Priprema za fakultete"}} className='edukacija'>Priprema za fakult.</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "rodjendan" ? 'visible' : "invisible"} subCategory`}><Link to={`/catg/11`} state={{categoryName: "Prostori za rodjendan"}} className='rodjendan'>Prostor</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "kupovina" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/34`} state={{categoryName: "Knjižare"}} className='kupovina'>Knjižare</Link></div></Col>
                <Col xs={4} className="oneCol"><div className={`${toggle == "zdravstvo" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/53`} state={{categoryName: "Državne ustanove"}} className='zdravstvo'>Državne ustanove</Link></div></Col>

                <Col xs={4} className="oneCol"><div className={`${toggle == "sport" ? 'visible' : "invisible"} subCategory `}><Link to={`/catg/41`} state={{categoryName: "Bazeni"}} className='sport'>Bazeni</Link></div></Col>

            </Row>
            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"></Col>
                <Col xs={4} className="oneCol"></Col>
            </Row>
            <Row className="show-grid"> 
                <Col xs={0} lg={2} className="oneCol"></Col>
                <Col xs={4} className="oneCol"></Col>
            </Row>


        </Grid>







        {/* <MapModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
        </>
    )
}

export default MainIcons
