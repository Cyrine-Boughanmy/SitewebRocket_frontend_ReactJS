import React, { useState } from 'react';
import './section.css';
import { Button } from '../button/Button';
import {Link } from 'react-router-dom';
// import { Link } from '@mui/material';
import { motion } from 'framer-motion';
import Popupinscription from '../popupinscription/popupinscription';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';

function Section({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLink,
  img,
  alt,
  imgStart
}) {

  const [OpenPopup, SetOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if(buttonLabel==="S’inscrire à la prochaine réunion d’information" ){
      SetOpenPopup(true);
    }
    
    
  };

  

  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'
              
              >
                <Flip top>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                </Flip>
                <Slide bottom>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                
               <Link to={buttonLink}>
               <Button buttonSize='btn--wide' buttonColor='lightblue' onClick={handleClickOpen} >
                    {buttonLabel} 
                  </Button>
                  { handleClickOpen && <Popupinscription OpenPopup={OpenPopup} SetOpenPopup={SetOpenPopup}></Popupinscription>}
              
               </Link>
                 </Slide> 
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                {/* motion : pour animer l'image */}
                <Fade top >
                <motion.img 
                whileHover={{scale : 1.15}}
                src={img} alt={alt} className='home__hero-img'
                style={{
                  marginLeft : imgStart==='start' ? '-40px' : '100px' , border : lightBg ?  '10px solid #014AAD' : '10px solid #FFFFFF' ,borderWidth: 'medium'
                 }}
                />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;