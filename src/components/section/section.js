import React from 'react';
import './section.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';


function Section({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
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
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
               {/* <Link to='/sign-up'>*/}
                  <Button buttonSize='btn--wide' buttonColor='lightblue'>
                    {buttonLabel}
                  </Button>
                {/*</Link>*/}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img'
                style={{
                  marginLeft : imgStart==='start' ? '-210px' : '216px'
                 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;