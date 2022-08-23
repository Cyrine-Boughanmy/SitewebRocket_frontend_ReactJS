import { Carousel } from 'react-carousel-responsive';
import React, { useState } from 'react';
import './prochainesréunions.css';
import Slider from "react-slick";
import { reunions } from './reunions';
// import { Link } from '@mui/material';
import { Link } from '@mui/material';
import { Button } from '../../button/Button';
import { motion } from 'framer-motion';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';
import Forminscriptionreunion from '../header/forminscriptionreunion';
import Modal from '../../modal/Modal';
import Popupinscription from '../../popupinscription/popupinscription';
import InscriptionForm from '../header/inscriptionform';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Prochainesréunions = () => {
     
  const [active, setActive]= useState(false);
  const [isOpen, setIsOpen] = useState(false);

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
          <div
            className='reunionsdev-section' >
            <div className='container'>
              <div
                className='row stackdev-row'
                style={{
                  display: 'flex',
                 
                }}
              >
                <div className='stackdev-col'>
                  <div className='stackdev-text-wrapper'>
                    <h1 className= 'stackdev-heading' >
                    Prochaines réunions d’information                    </h1>
                    <p
                      className=
                        'stackdev-subtitle' >
                          Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la possibilté de vous former depuis chez vous au métier de Développeur Full Stack.     </p>
                   
                  </div>
                  <div className='stack-slider'>
                    <Slide left>
                    <Slider {...settings}>
                    {reunions.map((item) => (
                        <motion.div 
                        whileHover={{scale : 1.15}}
                        className='card'>
                        <div className='reuniondev-card-top'>
                          <div className='reuniondev-card-text-wrapper'>
                          <h2>{item.date}</h2>
                          </div>
                        </div>
                        <div className='reuniondev-card-bottom'>
                            <h2>{item.jour} {item.heure}</h2>
                        </div>   
                        </motion.div>
                    ))}
                    </Slider>
                    </Slide>
                    
                    
                    
                  </div>
                  <div className='stack-btn'>
                    {/* <Link href='#forminscriptionreunion'> */}
                    <Button buttonSize='btn--wide' buttonColor='lightblue' onClick={() => {
                          setActive(true);
                          setIsOpen(true);
                        }} >
                    S’inscrire à la prochaine réunion d’information
                    </Button>
                    
                  {/* </Link> */}
                  </div>
                
              
                  
                </div>
              </div>
            </div>
          </div>
          <Popupinscription open={isOpen} onClose={() => setIsOpen(false)}>
          <InscriptionForm/>
					</Popupinscription>
          {/* {active && <Forminscriptionreunion/>} */}
          
        </>
      );
    }
export default Prochainesréunions;
