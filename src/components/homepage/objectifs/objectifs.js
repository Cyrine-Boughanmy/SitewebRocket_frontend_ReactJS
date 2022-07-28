import React from "react";
import { Button } from "../../button/Button";
import objimg from '../../../images/objectifs.jpg';
import './objectifs.css';
import { Link } from "react-router-dom";





function Objectifs() {
    return (
      <>
        <div
          className='objectifs-section' >
          <div className='container'>
            <div
              className='row objectifs-row'
              style={{
                display: 'flex',
               
              }}
            >
              <div className='objectifs-col'>
                <div className='objectifs-text-wrapper'>
                  <h1 className= 'objectifs-heading' >
                  Les OBJECTIFS du Bootcamp
                  </h1>
                  <p
                    className=
                      'objectifs-subtitle' >
                    Cette formation à temps plein et à distance, <br/>d’une durée de dix semaines, a pour objectif<br/> de vous former au métier de Développeur Full Stack
                  </p>
                 
                </div>
                <div className='objectifs-img-wrapper'>
                  <img src={objimg} alt='objectifs' className='objectifs-img' />
                </div>
               
                <div className='objectifs-btn'>
                    <Link to='/contactform'>
                    <Button buttonSize='btn--wide' buttonColor='primary' >
                      Je postule au Bootcamp
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
  
  export default Objectifs;