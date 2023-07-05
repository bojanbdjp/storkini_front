import React, {useState} from 'react'
import './WelcomePage.css'
import PropTypes from 'prop-types';
import leftLogo from '../../img/logo/leftLogo.png';
import rightLogo from '../../img/logo/rightLogo.png';
import miniLogo from '../../img/logo/trans-logo.png';

import {animated, useTransition} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlane} from '@fortawesome/free-solid-svg-icons'
import Slider, { SliderThumb } from '@mui/material/Slider';

import { styled } from '@mui/material/styles';

function ImageThumb (props)  {
    const { children, ...other } = props;
    return (
        <SliderThumb  {...other}>
            {children}
            <img src={miniLogo} style={{height: '8vh'}}/>
            {/* <FontAwesomeIcon icon={faPlane} style={{color: '#458fff'}} className='fa-2x'/> */}
        </SliderThumb >
    );
  };


  ImageThumb.propTypes = {
    children: PropTypes.node,
  };

  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 50,
      width: 50,
      backgroundColor: 'transparent',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));


function WelcomePage({showMainPage}) {
    
    const [sliderValue, setSliderValue] = useState(1)
    const [isVisible, setisVisible] = useState(false)
    const left = useTransition(isVisible, {
        from: {x: -1000, y: 0, opacity: 0},
        enter: {x:0, y:0, opacity: 1},
        leave:{},
        config: {
            duration: 1700 
          }
    })


    const right = useTransition(isVisible, {
        from: {x: 1000, y: 0, opacity: 0},
        enter: {x:0, y:0, opacity: 1},
        leave:{},
        config: {
            duration: 1700 
          }
    })

    const clickAndGo = (e, value) => {
        e.preventDefault();
        setSliderValue(value)
        
        if(value === 100) {
            setisVisible(!isVisible)
            setTimeout(() => {
                // localStorage.setItem('welcomeLoaded', true)
                showMainPage()
            }, 1700);
        }
    }


   

   

    //   const handleChange = (event, newValue) => {
    //     setSliderValue(newValue);
    //   };



    return (
        <div className="welcomePage container-fluid">
            <div className='row'>

            {left((style, item) => item ?  <animated.div style={style} className="col-6 half"> <img style={{float: 'right'}} src={leftLogo} /> </animated.div> : ''
            )}
                

            {right((style, item) => item ?  <animated.div style={style} className="col-6 half"> <img src={rightLogo} /> </animated.div> : ''
            )}
                {/* <div className='col-6 half'>
                    <img src={logo2} />
                </div> */}
            </div>

            <div className="row justify-content-center align-items-center" style={{marginTop:'70vh'}}>
                

                <div className='col-lg-3 col-10 slider-box mx-auto m-auto '>
                    <div className='row'>
                        <div className='col-12 text-center' style={{paddingTop: '1rem'}}>
                          <h1 className='goBtn' onClick={clickAndGo}>Kreni</h1>

                        </div>
                        <div className='col-12 mx-auto' style={{width: '90%'}}>
                        <AirbnbSlider
                          components={{ Thumb: ImageThumb }}
                          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                          defaultValue={[20, 40]}
                          value={sliderValue}
                          onChange={clickAndGo}/>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default WelcomePage
