import React, { useState } from 'react'
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
import bird from '../../../img/logo/orange.png'
import {animated, useTransition} from 'react-spring';
import { Link, useNavigate } from "react-router-dom";


function SerbiaMap() {
    let navigate = useNavigate();
    const [isVisible, setisVisible] = useState(false)
    const transition = useTransition(isVisible, {
        from: {x: -300, y: -880, opacity: 0},
        enter: {x:0, y:0, opacity: 1},
        leave:{},
        config: {
            duration: 850 
          }
    })

    const city = useTransition(isVisible, {
        from: {x: 0, y: 0,opacity: 1},
        enter: {x: 0, y: 0, opacity: 0},
        leave:{},
        delay: 100,
        config: {
            duration: 700 
          }
       
    })

    const  delayAndGo = (e) => {
        e.preventDefault();
        setisVisible(!isVisible)
    
        setTimeout(() => {
            navigate('/catgs')
        }, 900);
      }


    return (
            <Grid fluid >

                <Row className="">
                    <Col xs={2} className=""></Col>
                </Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col xs={9}></Col><Col className="oneCol white">Novi Sad</Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col xs={10}></Col><Col className="oneCol white" onClick={delayAndGo}>
                    {city((style, item) => item ?  <animated.p style={style} className="m-0">Beograd </animated.p>  : <p className={isVisible ? "d-none" : ""}>Beograd</p>
                    )}
                    
                    
                    {transition((style, item) => item ?  <animated.img style={style} className="image" src={bird} /> : ''
                    )}
                   </Col>
                </Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col xs={14}></Col><Col className="oneCol white">Nis</Col></Row>
                <Row><Col className="oneCol"></Col></Row>
                <Row><Col className="oneCol"></Col></Row>
            </Grid>
    )
}

export default SerbiaMap
