import { Typography } from '@mui/material';
import React from 'react'
import Form from '../../contactForm/form';
import InscriptionForm from './inscriptionform';

const Forminscriptionreunion = () => {
  
  return (
    
    <div className='reunionsdev-contact-section' id="contactform">
      
			<div className='reunionsdev-contact-container' id='contact'>
        
                 
            <div className='reunionsdev-contact-form' style={{textAlign:'center', marginLeft:"auto",marginRight:"auto"}}>
           
            
                <InscriptionForm/>
                {/* <Form/> */}
                </div>
                </div>
    </div>
    
  )
}

export default Forminscriptionreunion;
