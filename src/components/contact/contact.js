import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import './contact.css';
import { Card, CardContent, Container } from '@mui/material';
import { Button } from '../button/Button';
import { ErrorMessage } from '@hookform/error-message';
import contactlogo from '../../images/logo1.png';


const Contact = () => {

	const { register, formState: { errors }, handleSubmit } = useForm();
	const [isOpen, setIsOpen] = useState(false)
	const [nom, SetNom] = useState('')
	const [prenom, setprenom] = useState('')
	const [email, setemail] = useState('')
	const [tel, settel] = useState('')
	const validate = () => {
		let user = { nom: '', prenom: '', email: '', tel: '' }
		user.nom = nom
		user.prenom = prenom
		user.email = email
		user.tel = tel
		console.log(user);

	}




	return (
		<div className='contact-section'>
          








			<Container>

				<Grid container spacing={2} columns={12} sx={{
					display: 'flex', alignContent: 'space-between', alignItems: 'center'
				}} >
					<Grid  item xs={12} md={6}
						sx={{
							width: '50%'
						}}
					>
						

						<h1 className='contact-heading'>Nous contacter</h1>

						<div className='contact-info'>
							<div className='text-1'>
								<LocationOnIcon /><h4> Rocket Coding</h4>
							</div>
							<div className='text-2'>
								7, place de l’Hôtel de Ville
								93600 Aulnay-sous-Bois
							</div>
						</div>
						<div className='contact-info'>
							<div className='text-1'>
								<AlternateEmailIcon /> <h4>Adresse email</h4>
							</div>
							<div className='text-2'>
								contact@rocketcoding.fr
							</div>
						</div>


						<div className='contact-info'>
							<div className='text-1'>
								<PhoneIcon /> <h4>Téléphone</h4>
							</div>
							<div className='text-2'>
								+33............
							</div>
						</div>
						

					</Grid>


					<Grid item xs={12} md={6}
						sx={{
							width: '50%'
						}}>

						<Card style={{margin :"0 auto"}}>
							<CardContent>
									<div className='form-text-wrapper'>
										<h1 className='form-heading'>
											Postuler
										</h1>
									</div>
									< div className='form-layout'>
										<form
											
										>
											<div className="Categorie_Formulaire">
												{/** FIRST NAME INPUT */}
												<input
													{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

													register('nom', {
														required: '* Ce champs est requis',
														shouldUnregister: true
													})}
													placeholder="Nom "
													onChange={(e) => {
														SetNom(e.target.value)
													}}
												/>

												{/** Show an error message under the input if the field does not respect validation rules */}
												<ErrorMessage
													errors={errors}
													name="nom"
													render={({ message }) => <p id="Message_erreur">{message}</p>}
												/>

												{/* --- LAST NAME INPUT --- */}
												<input
													{...register('prenom', {
														required: '* Ce champs est requis'
													})}
													placeholder="Prénom "
													onChange={(e) => {
														setprenom(e.target.value)
													}}
												/>

												<ErrorMessage
													errors={errors}
													name="prenom"
													render={({ message }) => <p id="Message_erreur">{message}</p>}
												/>

												{/* --- EMAIL INPUT --- */}
												<input
													{...register('email', {
														required: '* Ce champs est requis',
														pattern: {
															value: /\d+/,
															message: 'Ce champs ne comprend que des chiffres.'
														}
													})}
													placeholder="Email "
													onChange={(e) => {
														setemail(e.target.value)
													}}
												/>
												<ErrorMessage
													errors={errors}
													name="email"
													render={({ message }) => <p id="Message_erreur">{message}</p>}
												/>
												{/* --- PHONE NUMBER INPUT --- */}
												<input
													{...register('telephone', {
														required: '* Ce champs est requis',
														pattern: {
															value: /\d+/,
															message: 'Ce champs ne comprend que des chiffres.'
														}
													})}
													placeholder="Telephone "
													onChange={(e) => {
														settel(e.target.value)
													}}
												/>
												<ErrorMessage
													errors={errors}
													name="telephone"
													render={({ message }) => <p id="Message_erreur">{message}</p>}
												/>



												<Button type="submit" buttonSize='btn--wide' buttonColor='lightblue' onClick={() => {
													validate()
													setIsOpen(true)
												}}>ENVOYER</Button>

												{/* <p>{result}</p>  */}
											</div>

										</form>



									</div>
									</CardContent>
									</Card>
								

					</Grid>
				</Grid>
				<a href='/'>
					<div className='contact-logo-img'>

						<img src={contactlogo} alt='imagelogo' />

					</div>
				</a>
			</Container>

		</div>
	);
}

export default Contact;
