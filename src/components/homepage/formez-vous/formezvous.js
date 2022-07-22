import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './formezvous.css';
import Section from '../../section/section';
import { formezvous } from '../pages';
const Formezvous = () => {
  return (
    <>
    <Section {...formezvous}/>
    </>
  );
}

    {/*
        <React.Fragment>
      <CssBaseline />
      <Box component="div" sx={{backgroundColor:'#FFFF', display: 'flex', height:'100vh'}}>
        
      
      <Grid container spacing={2} sx={{marginTop:'100px'}}>
        
          <Grid item xs={12}  md={6} >
          <Box
          sx={{display: 'flex',overflow:'hidden',backgroundColor:'transparent', justifyContent:'flex-start',marginTop:'20px'}}
          >
        <img src={fvimg} alt=''/>
          </Box>
        </Grid>
        
      
 
        
        <Grid item xs={12} md={6}>

        
              <h1 className='text-titlel'>
              Formez-vous au métier de 
              Développeur Full Stack <br></br> 
              Web et Mobile
              </h1>
                <p className='text-descriptionl'>
                Cette formation à temps plein, intensive<br></br>
                d’une durée de dix semaines, vous offre la <br></br>
                possibilté de vous former depuis chez vous<br></br>
                au métier de Développeur Full Stack
                </p>
                <button className='btn-infosessionf'>
                Paypal                </button>
            
        
        </Grid>
        
      </Grid>
    
      </Box>    
  </React.Fragment> */}

export default Formezvous;
