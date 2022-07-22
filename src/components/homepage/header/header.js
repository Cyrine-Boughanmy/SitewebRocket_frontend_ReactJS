import React from 'react';
import './header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from '../../section/section';
import { header } from '../pages';




const Header = () => {

 

  return (
    <>
    <Section {...header}/>
</>);
  }

{/*
<React.Fragment>
      <CssBaseline />
      <Box component="div" sx={{backgroundColor:'#004AAD', display: 'flex', height:'100vh'}}>
      
      
        
      
      <Grid container spacing={2} sx={{marginTop:'100px'}}>
        
          <Grid item xs={12}  md={6} >
           
              <h1 className='text-titler'>
                Devenez <br></br>
                Développeur Full Stack <br></br> 
                En 2 mois, à distance
              </h1>
                <p className='text-descriptionr'>
                La seule formation à distance, en accéléré <br></br>
                et intensive d’une durée de 10 semaines pour <br></br>
                devenir Développeur Full Stack
                </p>
                <button className='btn-infosession'>
                S’inscrire à la prochaine réunion d’information
                </button>
          
          </Grid>
        
             
 
        
        <Grid item xs={12} md={6}>
          <Box
          sx={{display: 'flex',overflow:'hidden',backgroundColor:'transparent', justifyContent:'flex-end',marginTop:'20px'}}
          >
        <img src={accimg} alt=''/>
          </Box>
        </Grid>
        
      </Grid>
    
    
    
      </Box>    
  </React.Fragment>*/}

  export default Header;