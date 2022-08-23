import React from 'react'
import { Grid } from '@material-ui/core';
import Logo_Fb from '../../images/facebook_30px.png';
import Logo_Insta from '../../images/instagram_30px.png';
import logorocketcoding from '../../images/logo1.png';
import Logo_Linkedin from '../../images/linkedin_30px.png';
import './Footer.css';
import { useLocation } from "react-router-dom";

import CGV from "../../pdf/CGU.pdf";
import ML from "../../pdf/mentionlegales.pdf";


const Footer = () => {
  const location = useLocation();

  const regex = /^\/admin/g;
  //   ne pas afficher dans la page admin
  if (!location.pathname.match(regex)) {
    return (
      <div >
            <Grid container id="footer" style={{backgroundColor:"#014AAD"}}>
              <Grid container className="footer-logo-border" justifyContent="center" xs={12} md={2}>
                <a href="/">
                  <img src={logorocketcoding} alt="logo Footer" style={{ maxWidth: "60%" , marginLeft:"18px"}}></img>
                </a>
              </Grid>
              <Grid container className="footer-text" direction="row" xs={12} md={10}>
                  <Grid xs={12} sm={6} md={3}>
                    <h5 style={{color:"#FF9F1C"}}>ADRESSE</h5>
                    <p>
                      <a 
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                        href="/"                    
                      >
                         7, place de l’Hôtel de Ville <br></br> 93600 Aulnay-sous-Bois
                      </a>
                    </p>
                  </Grid>
                  <Grid xs={12} sm={6} md={3} className="openhours">
                    <h5 style={{color:"#FF9F1C"}}>HORAIRES</h5>
                    <span>Lundi au Vendredi : </span><br/><span className="openhours"> 09h00 - 18h00</span>
                    
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <h5 style={{color:"#FF9F1C"}}>CONTACT</h5>
                    <p>
                    <a class="footer-link" href="tel:03-10-64-76-45"> 03 10 64 76 45 </a>
                       <br></br> 
                    <a 
                      className="footer-link" 
                      href="mailto:lemustangtroyes.site@gmail.com"
                      rel="noreferrer"
                    > contact@rocketcoding.fr</a>
                    </p>
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <h5 style={{color:"#FF9F1C"}}>REJOIGNEZ-NOUS !</h5>
                    <p>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                        <img src={Logo_Fb} alt='logo facebook'></img>
                      </a>
                       &nbsp; 
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
                      <img src={Logo_Insta} alt='logo instagram'></img>
                      </a>
                      &nbsp; 
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                      <img src={Logo_Linkedin} alt='logo linkedin'></img>
                      </a>
                    </p>
                  </Grid>

                  

              </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{backgroundColor:'#FFFFFF'}}>
                
                    <span className="footer-copyright">Copyright 2021 ©  |  Made by <a 
                      className="footer-link" 
                      target="_blank" 
                      rel="noreferrer" 
                      href="http://www.ceostech.fr/"
                    > Ceos Tech </a>  | 
                    <a 
                      className="footer-link" 
                      target="_blank" 
                      rel="noreferrer" 
                      href={CGV}
                    > CGV  </a>| 
                    <a 
                      className="footer-link" 
                      target="_blank" 
                      rel="noreferrer" 
                      href={ML}
                    > Mentions Légales </a></span>
                
            </Grid>
        </div>
  
    ) }

    return null;
  };
  export default Footer;