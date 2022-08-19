import React from 'react'
import Form from '../../contactForm/form';
import InscriptionForm from './inscriptionform';

const Forminscriptionreunion = () => {
  return (
    <div className='contact-section' id="contactform">
			<div className='contact-container' id='contact'>
            <div className='contact-form'>
                <InscriptionForm/>
                {/* <Form/> */}
                </div>
                </div>
    </div>
  )
}

export default Forminscriptionreunion;
