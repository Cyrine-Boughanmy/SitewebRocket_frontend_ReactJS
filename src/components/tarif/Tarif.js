import React from 'react';
import Slider from 'react-slick';
import { Button } from '../button/Button';
import './Tarif.css';
import { listetarif } from './listetarif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



const Tarif = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
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



    return (
        <>
          <div
            className='tarif-section' id="tarif">
            <div className='container'>
              <div
                className='row tarif-row'
                style={{
                  display: 'flex',
                 
                }}
              >
                   <div className='tarif-text-wrapper'>
                    <h1 className= 'tarif-heading' >
                    Tarif du Bootcamp
                    </h1>
                    <p
                      className=
                        'tarif-subtitle' >
                      Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la possibilté de vous former depuis chez vous au métier de Développeur Full Stack
                    </p>
                   
                  </div>
                <div className='tarif-col'>
                <Bounce right>
                 <div className='tarif-img-wrapper'>
                  
                 {listetarif.map((item) => (
                  <motion.img 
                  whileHover={{scale : 1.15}}
                  src={item.img} alt='tarif' className='tarif-img'/>
                  ))}
                  
                  </div>
                  </Bounce>
                  <div className='objectifs-btn'>
                    <Link to='/contactform'>
                    <Button buttonSize='btn--medium' buttonColor='primary' >
                      Je postule au Bootcamp
                    </Button>
                  </Link>
                  </div>

                {/* <div className='stack-slider'>
                <Slider {...settings}>
                    {listetarif.map((item) => (
                        <div className='tarif-card'>
                        <div className='tarif-card-top'>
                          <img src={item.img} alt={item.alt}/>
                          
                        </div>
                        <div className='tarif-card-bottom'>
                          <div className='tarif-title'>
                            <h2>{item.titre}</h2>
                          </div>
                           <div className='tarif-desc'>
                            <p>{item.desc}</p>
                           </div>
                           <div className='tarif'>
                            <h6>{item.tarif}</h6>
                           </div>
                           <div className='tarif-btn'>
                                <Link to='/sign-up'>
                                <Button buttonSize='btn--medium' buttonColor='primary' >
                                Télécharger le programme
                                </Button>
                            </div>
                        </div>   
                        </div>
                    ))}
                    </Slider>
                </div> */}
                    
                </div>
                
                  
                
              </div>
            </div>
          </div>
        </>
      );
    }
export default Tarif;
