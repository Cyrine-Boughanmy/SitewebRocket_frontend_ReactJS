import React, { useState } from 'react';
import './header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from '../../section/section';
import { header } from '../pages';
import { Button } from '../../button/Button';
import Popupinscription from '../../popupinscription/popupinscription';




const Header = () => {
  const [OpenPopup, SetOpenPopup] = useState(false);
 

  return (
    <>
    <Section {...header}/>
    
    {/*<Button buttonSize='btn--wide' buttonColor='lightblue' className='btn-header' onClick={() => SetOpenPopup(true)}
                 >
                S’inscrire à la prochaine réunion d’information
    </Button>
  <Popupinscription OpenPopup={OpenPopup} SetOpenPopup={SetOpenPopup}> </Popupinscription>*/}
    
</>);
  }


  export default Header;