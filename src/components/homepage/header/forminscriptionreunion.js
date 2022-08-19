import { Typography } from '@mui/material';
import React from 'react'
import Form from '../../contactForm/form';
import InscriptionForm from './inscriptionform';

const Forminscriptionreunion = () => {
  return (
    
    <div className='contact-section' id="contactform">
      {/* <h1 style={{fontFamily:"'Arimo', sans-serif",
    fontStyle:" normal",
    fontWeight: "300",
    lineHeight: "32px",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    color:" #FFFFFF"}} >
                  S'inscrire à la prochaine réunion d'information :
                  </h1> */}
			<div className='contact-container' id='contact'>
        
                 
            <div className='contact-form' style={{textAlign:'center', marginLeft:"auto",marginRight:"auto"}}>
           
            
                <InscriptionForm/>
                {/* <Form/> */}
                </div>
                </div>
    </div>
    
  )
}

export default Forminscriptionreunion;
