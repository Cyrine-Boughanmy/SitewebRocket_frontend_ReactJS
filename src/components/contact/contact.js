import React from 'react';
import Grid from '@mui/material/Grid';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='container'>
        <div className='contact-row'>
          <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <div className='contact-text-wrapper'>
              <h1 className='contact-heading'>Nous contacter</h1>
            </div>
          </Grid>
          <Grid item xs={8}>
          <h1>HELLO</h1>
          </Grid>
        </Grid>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
