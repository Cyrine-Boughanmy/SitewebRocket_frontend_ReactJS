import React, { useState } from 'react';
import Header from './header/header';
import Formezvous from './formez-vous/formezvous';
import Objectifs from './objectifs/objectifs';
import Pourquoiunbootcamp from './pourquoiunbootcamp/pourquoiunbootcamp';
import Pourquoirocketcoding from './pourquoirocketcoding/pourquoirocketcoding';
import Programme from '../programme/Programme';
import Stackdedeveloppement from './stackdedevloppement/stackdedeveloppement';
import Tarif from '../tarif/Tarif';
import Prochainesréunions from './prochainesréunions/prochainesréunions';
import Prochainessessions from './prochainessesions/prochainessessions';
import Contact from '../contact/contact';
import Formulaire from '../contactForm/contactform';
import Footer from '../footer/Footer';
import CookieConsent from 'react-cookie-consent';
import Navbar from '../navbar/navbar';
import Forminscriptionreunion from './header/forminscriptionreunion';




const Home = () => {
  const [active, setActive]= useState(false);


  return (
<div>

           
  <Header/>
  <Formezvous/>
  <Objectifs/>
  <Pourquoiunbootcamp/>
  <Pourquoirocketcoding/>
  <Programme/>
  <Stackdedeveloppement/>
  <Tarif/>
  <Prochainesréunions/>
  {active && <Forminscriptionreunion/>}
  <Prochainessessions/>
  <Formulaire/>
  <Footer/>
  
  
  <div>
			<CookieConsent
               enableDeclineButton
               buttonText="J'accepte"
               declineButtonText="Je refuse"
      >
        Ce site utilise des cookies pour améliorer votre expérience.
      </CookieConsent>
            </div>
  
</div>
  )
  
}

export default Home;
