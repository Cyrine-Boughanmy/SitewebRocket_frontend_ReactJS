import React, { useState } from 'react';
import './header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from '../../section/section';
import { header } from '../pages';
import { Button } from '../../button/Button';
import Popupinscription from '../../popupinscription/popupinscription';
import CookieConsent from 'react-cookie-consent';




const Header = () => {
  const [OpenPopup, SetOpenPopup] = useState(false);
 

  return (
    <>
    <Section {...header}/>
    <div>
			<CookieConsent
               enableDeclineButton
               buttonText="J'accepte"
               declineButtonText="Je refuse"
      >
        Ce site utilise des cookies pour améliorer votre expérience.
      </CookieConsent>
            </div>
    
    
    
</>);
  }


  export default Header;