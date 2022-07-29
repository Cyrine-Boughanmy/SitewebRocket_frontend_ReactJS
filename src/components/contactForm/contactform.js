import { React } from 'react';

import './Contact.css';

import Form from './form';
{/*import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';}

import axios from 'axios';
import { data } from 'jquery';*/}





/** Components */
const Formulaire = () => {



	return (
		<div className='contact-section' id="contactform">
			<div className='contact-container' id='contact'>
				{/* Contact Form */}
				<div className='contact-left'>
					<h1> Nous contacter </h1>
					<h4>Rocket Coding</h4>
					<p>7, place de l’Hôtel de Ville <br /> 93600 Aulnay-sous-Bois</p>
					<h4>Adresse mail</h4>
					<p>contact@rocketcoding.fr</p>
					<h4>Téléphone</h4>
					<p> ..............</p>
				</div>
				<div className='contact-form'>
				<Form/>
				</div>
			</div>
			
			{/*<a href='/'>
			<div className='contact-logo'>
					<img src={contactlogoimg} alt='logo'  />
			</div>
	</a>*/}
		</div>

	);

}
export default Formulaire;