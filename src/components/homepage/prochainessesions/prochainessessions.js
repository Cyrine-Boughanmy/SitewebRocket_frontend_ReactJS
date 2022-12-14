import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button } from '../../button/Button';
import './prochainessessions.css';
import { listesessions } from './listesessions';
import { motion } from 'framer-motion';
import { Slide} from 'react-reveal';
import Popupinscription from '../../popupinscription/popupinscription';
import InscriptionForm from '../header/inscriptionform';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



const Prochainessessions = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {

    setIsOpen(true);



  };

  return (
    <>
      <div
        className='session-section' >
        <div className='container'>
          <div
            className='row session-row'
            style={{
              display: 'flex',

            }}
          >
            <div className='session-text-wrapper'>
              <h1 className='session-heading' >
                Prochaines sessions du Bootcamp </h1>
              <p
                className=
                'session-subtitle' >
                Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la possibilté de vous former depuis chez vous au métier de Développeur Full Stack                    </p>

            </div>
            <div className='session-col'>
              <div className='stack-slider'>
                <Slide right>
                  <Slider {...settings}>
                    {listesessions.map((item) => (
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className='session-card'>
                        <div className='session-card-top'>
                          <img src={item.img} alt={item.alt} />

                        </div>
                        <div className='session-card-bottom'>
                          <div className='session-title'>
                            <h2>{item.titre}</h2>
                          </div>
                          <div className='session-desc'>
                            <p>{item.desc}</p>
                          </div>

                          <div className='session-btn'>
                            {/* <Link to='/forminscriptionreunion'> */}
                            <Button buttonSize='btn--medium' buttonColor='blue' onClick={handleClickOpen} >
                              Je m'inscris
                            </Button>
                            {/* </Link> */}

                            {/* { handleClickOpen && <Popupinscription OpenPopup={OpenPopup} SetOpenPopup={SetOpenPopup}></Popupinscription>} */}
                          </div>
                        </div>
                      </motion.div>

                    ))}
                  </Slider>
                </Slide>
              </div>

            </div>



          </div>
        </div>
      </div>
      <Popupinscription open={isOpen} onClose={() => setIsOpen(false)}>
        <InscriptionForm />
      </Popupinscription>
    </>
  );
}
export default Prochainessessions;
