import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { motion } from 'framer-motion';
import Modal from '../modal/Modal';
import axios from 'axios';
import { data } from 'jquery';


const Form = () => {

	const [form, setForm] = useState("");
	const [mail, setMail] = useState("");
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

	const envoi = async (data) => {
		console.log('==============ENVOIE=======');
		console.log(data);
		console.log('==============FIN=======');

		await axios
			.post(
				// "http://localhost:8000/formulaire_postuler/liste/",
				"https://rocket-coding-site-back.herokuapp.com/formulaire_postuler/liste/",
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
				whileHover={{ scale: 1.05 }}
				className="Formulaire"
				onSubmit={handleSubmit((data) => {
					envoi(data);
				})}
			>
				<h5> Postuler </h5>

				<div className="Categorie_Formulaire">
					{/** FIRST NAME INPUT */}
					<input
						{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

						register('nom', {
							required: '* Ce champs est requis',
							value: data.nom,
							shouldUnregister: true,
						})}
						placeholder="Nom *"
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
						placeholder="Pr??nom *"
						onChange={(e) => {
							setprenom(e.target.value)
						}}
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
						placeholder="T??l??phone *"
						onChange={(e) => {
							settel(e.target.value)
						}}
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
						onChange={(e) => {
							setemail(e.target.value)
						}}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
						render={({ message }) => <p id="Message_erreur">{message}</p>}
					/>




					<button type="submit" className='envoyer-btn' onClick={() => {
						validate()
						setIsOpen(true)
					}} >Je postule</button>
					{isOpen && !nom && !prenom && !email && !tel ? <Modal open={isOpen} onClose={() => setIsOpen(false)}>
						Veuillez remplir tous les champs.
					</Modal> : <Modal open={isOpen} onClose={() => setIsOpen(false)}>
						Vos coordonn??es sont enregistr??es et un message vous sera envoy?? dans quelques minutes !
					</Modal>}
					{/* {handleClickOpen && <popupvalidation OpenPopup={OpenPopup} SetOpenPopup={SetOpenPopup}></popupvalidation>} */}
					{/* onClick={() =>{ validate()
										setIsOpen(true)}} */}

					{/* <p>{result}</p>  */}
				</div>
			</motion.form>




		</>

	);
}

export default Form;
