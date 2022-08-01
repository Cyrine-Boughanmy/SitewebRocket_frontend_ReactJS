import { Carousel } from 'react-carousel-responsive';
import React from 'react';
import './stackdedeveloppement.css';
import Slider from "react-slick";
import { stack } from './stack';
import { Button } from '../../button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Stackdedeveloppement = () => {
     
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
            className='stackdev-section' >
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
                    Le Stack de développement
                    </h1>
                    <p
                      className=
                        'stackdev-subtitle' >
                          Durant ces dix semaines intensives vous serez formés sur les langages de programmation suivants : HTML/CSS, Javascript et Python; Vious serez également formés sur les Frameworks React (JS et Native) et Django.     </p>
                   
                  </div>
                  <div className='stack-slider'>
                    <Slide right>
                    <Slider {...settings}>
                    {stack.map((item) => (
                        <motion.div 
                        whileHover={{scale : 1.15}}
                        className='card'>
                        <div className='card-top'>
                          <img src={item.img} alt={item.alt}/>
                          
                        </div>
                        <div className='card-bottom'>
                            <h1>{item.titre}</h1>
                        </div>   
                        </motion.div>
                    ))}
                    </Slider>
                    </Slide>
                    
                    
                  </div>

                <div className='stack-btn'>
                  <Link to='/programme'>
                    <Button buttonSize='btn--wide' buttonColor='lightblue' >
                      consulter le programme
                    </Button>
                  </Link>
                  </div>
              
                  
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

export default Stackdedeveloppement;
