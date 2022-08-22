import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../contactForm/Contact.css';
import { motion } from 'framer-motion';
import Modal from '../../modal/Modal';
import { Box, DialogActions, DialogContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { data } from 'jquery';
import {reunions} from '../prochainesréunions/reunions';
const InscriptionForm = (props) => {
	

	const theme = createTheme({
		palette: {
		 blue: {
			main: '#014AAD',
		   
		  },
		},
	  });
	const [form, setForm] = useState("");
	const [mail, setMail] = useState("");
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [isOpen, setIsOpen] = useState(false)
	const[nom,SetNom]= useState('')
    const [prenom, setprenom] = useState('')
    const [email, setemail] = useState('')
	const [tel, settel] = useState('')
	const validate=()=>{
		let user={nom:'',prenom:'',email:'',tel:''}
		user.nom=nom
		user.prenom=prenom
		user.email=email
		user.tel=tel
		console.log(user);
		
		}

		const [date_reunion, setDate_reunion] = React.useState('');
        const handleChange = (event) => {
            setDate_reunion(event.target.value);
          };

	const envoi = async (data) => {
		console.log('==============ENVOIE=======');
		console.log(data);
		console.log('==============FIN=======');

		await axios
			.post(
				'http://localhost:8000/formulaire_reunion_info/liste/',
				{ ...data } // {...data, message: "...."}
				
			)
			.then((response) => {
				console.log(response.data);
				window.location.reload(false);
			})
			.catch((e) => {
				console.log(e.response);
			});
	};

	


  return (
    <>
					<motion.form
					id="myform"
					whileHover={{scale : 1.05}}
						className="Formulaire"
						onSubmit={handleSubmit((data) => {
								envoi(data);


						})}
					>
						 
						<h5 style={{fontFamily:"'Arimo', sans-serif",
    fontStyle:" normal",
    fontWeight: "900",
    lineHeight: "58px",
    textAlign: "center",
    marginBottom: "25px",
    marginTop: 0,
	marginLeft:0,
	textAlign: "center",
    fontSize: "36px",
	
	}}> S'inscrire à la prochaine réunion d'information  </h5>

						<div className="Categorie_Formulaire">
							{/** FIRST NAME INPUT */}
							
							<input
								{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

								register('nom', {
									required: '* Ce champs est requis',
									value : data.nom,
									shouldUnregister: false,
								})}
								placeholder="Nom *"
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
								placeholder="Prénom *"
							/>

							<ErrorMessage
								errors={errors}
								name="prenom"
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
								placeholder="Telephone *"
							/>
							<ErrorMessage
								errors={errors}
								name="telephone"
								render={({ message }) => <p id="Message_erreur">{message}</p>}
							/>

							{/* --- EMAIL INPUT --- */}
							<input
								{...register('email', {
									required: '* Ce champs est requis'
								})}
								placeholder="Email *"
								onChange={(e)=>{
									setemail(e.target.value)
								}}
							/>
							<ErrorMessage
								errors={errors}
								name="email"
								render={({ message }) => <p id="Message_erreur">{message}</p>}
							/>
							
                                <FormControl fullWidth>
								<ThemeProvider theme={theme}>
								<TextField
								{...register('date_reunion', {
									required: '* Ce champs est requis'
								})}
									label="Date de la réunion *"
									variant="outlined"
									color="blue"
									sx={{borderRadius: "4px",border: "1px solid #014AAD"}}
									select
									value={date_reunion}
									onChange={handleChange}
								>
                            {reunions.map((item) => (
                            <MenuItem value={item.date}>le {item.jour} {item.date} à {item.heure}</MenuItem>
                            // <MenuItem value={20}>Twenty</MenuItem>
                            // <MenuItem value={30}>Thirty</MenuItem>
							))}
							</TextField>
							</ThemeProvider>
                            {/* </Select> */}
                            <ErrorMessage
                                errors={errors}
                                name="date_reunion"
                                render={({ message }) => <p id="Message_erreur">{message}</p>}
                            />
                                </FormControl>
                              
							<button  type="submit" className='envoyer-btn' form="myform" onClick={() =>{ validate()
										setIsOpen(true)}}>Je m'inscris</button>
							{ isOpen && !nom && !prenom && !email && !tel ? <Modal open={isOpen} onClose={() => setIsOpen(false)}>
					Veuillez remplir tous les champs.
					</Modal> :<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					Vos coordonnées sont enregistrées et un message vous sera envoyé dans quelques minutes ! 
					</Modal> } 
							{/* <p>{result}</p>  */}
						</div>
					</motion.form>
					
					</>
				
  );
}

export default InscriptionForm;
