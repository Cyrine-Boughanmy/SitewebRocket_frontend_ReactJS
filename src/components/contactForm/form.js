import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'

const Form = () => {

	const [form, setForm] = useState("");
	const [mail, setMail] = useState("");
	const { register, formState: { errors }, handleSubmit } = useForm();

	{/* const envoi = async (data) => {
		console.log('==============ENVOIE=======');
		console.log(data);
		console.log('==============FIN=======');

		await axios
			.post(
				'https://afrikavenir93.herokuapp.com/contacts/',
				{ ...data } // {...data, message: "...."}
				
			)
			.then((response) => {
				console.log(response.data);
				window.location.reload(false);
			})
			.catch((e) => {
				console.log(e.response);
			});
	};*/}

	const update = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		setForm({ ...form, [id]: value });
	};


  return (
    
					<form
						className="Formulaire"
						onSubmit={handleSubmit((data) => {
							//	envoi(data);


						})}
					>
						<h5> Postuler </h5>

						<div className="Categorie_Formulaire">
							{/** FIRST NAME INPUT */}
							<input
								{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

								register('nom', {
									required: '* Ce champs est requis',
									//value : data.nom,
									shouldUnregister: true,
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
									required: '* Ce champs est requis',
									pattern: {
										value: /\d+/,
										message: 'Ce champs ne comprend que des chiffres.'
									}
								})}
								placeholder="Email *"
							/>
							<ErrorMessage
								errors={errors}
								name="email"
								render={({ message }) => <p id="Message_erreur">{message}</p>}
							/>



							<button type="submit" >Je m'inscris</button>

							{/* <p>{result}</p>  */}
						</div>
					</form>
				
  );
}

export default Form;
