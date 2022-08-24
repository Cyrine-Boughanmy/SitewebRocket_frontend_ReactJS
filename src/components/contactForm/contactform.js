import { React} from 'react';
import './Contact.css';
import Form from './form';


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
					{/* <Form/> */}
					<Form />

				</div>
			</div>

			
		</div>

	);

}
export default Formulaire;