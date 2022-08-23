import React from "react";
import prqrcimg from '../../../images/pfrocket.jpg';
import './pourquoirocketcoding.css';
import { Fade , Slide , Flip , Bounce} from 'react-reveal';





function Pourquoirocketcoding() {
    return (
      <>
      
        <div
          className='prqrocketcoding-section' >
          <div className='container'>
            <div
              className='row prqrocketcoding-row'
              style={{
                display: 'flex',
               
              }}
            >
              <Fade top>
              <div className='prqrocketcoding-col'>
                <div className='prqrocketcoding-text-wrapper'>
                  <h1 className= 'prqrocketcoding-heading' >
                  Pourquoi se former chez Rocket Coding ?
                  </h1>
                  <p
                    className=
                      'prqrocketcoding-subtitle' >
                        Cette formation à temps plein, intensive d’une durée de dix semaines, vous offre la possibilté de vous 
                        former depuis chez vous au métier de Développeur Full Stack .      </p>
                 
                </div>
                <div className='prqrocketcoding-img-wrapper'>
                  <img src={prqrcimg} alt='prqrocketcoding' className='prqrocketcoding-img' />
                </div>
               
                
              </div>
            
                
              </Fade>
            </div>
          </div>
        </div>
       
      </>
    );
  }
  
  export default Pourquoirocketcoding;