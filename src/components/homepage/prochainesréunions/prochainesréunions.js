import { Carousel } from 'react-carousel-responsive';
import React from 'react';
import './prochainesréunions.css';
import Slider from "react-slick";
import { reunions } from './reunions';
import { Link } from 'react-router-dom';
import { Button } from '../../button/Button';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Prochainesréunions = () => {
     
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

    return (
        <>
          <div
            className='reunionsdev-section' >
            <div className='container'>
              <div
                className='row reunionsdev-row'
                style={{
                  display: 'flex',
                 
                }}
              >
                <div className='reunionsdev-col'>
                  <div className='reunionsdev-text-wrapper'>
                    <h1 className= 'reunionsdev-heading' >
                    Prochaines réunions d’information                    </h1>
                    <p
                      className=
                        'reunionsdev-subtitle' >
                          Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la possibilté de vous former depuis chez vous au métier de Développeur Full Stack.     </p>
                   
                  </div>
                  <div className='reunions-slider'>
                    <Slider {...settings}>
                    {reunions.map((item) => (
                        <div className='card'>
                        <div className='reuniondev-card-top'>
                          <div className='reuniondev-card-text-wrapper'>
                          <h2>{item.date}</h2>
                          </div>
                        </div>
                        <div className='reuniondev-card-bottom'>
                            <h2>{item.jour} {item.heure}</h2>
                        </div>   
                        </div>
                    ))}
                    </Slider>
                    
                    
                    
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
export default Prochainesréunions;
