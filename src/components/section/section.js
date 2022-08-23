import React, { useState } from 'react';
import './section.css';
import { Button } from '../button/Button';
// import {Link } from 'react-router-dom';
import { Link } from '@mui/material';
import { useNavigate} from 'react-router-dom';

import { motion } from 'framer-motion';
import Popupinscription from '../popupinscription/popupinscription';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';
import InscriptionForm from '../homepage/header/inscriptionform';
import CustomizedDialogs from '../popupinscription/popupinscription';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import Modal from '../modal/Modal';
import Modal from 'react-responsive-modal';
import { data } from 'jquery';
import { ErrorMessage } from '@hookform/error-message';
import Forminscriptionreunion from '../homepage/header/forminscriptionreunion';
import { SettingsPowerRounded } from '@material-ui/icons';

function Section({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLink,
  buttonHref,
  img,
  alt,
  imgStart
}) {

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive]= useState(false);
  
  const handleClickOpen = () => {
    // if (buttonLabel==='S’inscrire à la prochaine réunion d’information') {
      // setActive(true);
      setIsOpen(true);
    // }
  }

  

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
                {/* button field */}
                { buttonLabel==='S’inscrire à la prochaine réunion d’information' ? <>
                  <Button buttonSize='btn--wide' buttonColor='lightblue'  onClick={handleClickOpen}
                  > 
                  
                      {buttonLabel} 
                     </Button>
                   <Popupinscription open={isOpen} onClose={() => setIsOpen(false)}>
                      <InscriptionForm/>
                      </Popupinscription> </> :
              
               <Link href={buttonLink}>
               <Button buttonSize='btn--wide' buttonColor='lightblue'  onClick={handleClickOpen}
               > 
               
                   <a style={{ textDecoration: "none" , color:"#000000"}} href={buttonHref}>{buttonLabel} </a> 
                  </Button>
                
                   {/*  */}
                            
                       {/* { handleClickOpen && <Popupinscription OpenPopup={OpenPopup} SetOpenPopup={SetOpenPopup}></Popupinscription> } */}
                  {/*  */}
               </Link> }
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