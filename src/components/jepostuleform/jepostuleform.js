import { React, useState } from 'react';import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '../button/Button';
import './jepostuleform.css';

const Jepostuleform = () => {

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

  return (
    <div className='form-section'>
        <div className='form-container'>
            <div className='form-row'>
                <div className='form-text-wrapper'>
                    <h1 className='form-heading'>
                    Postuler
                    </h1>
                </div>
              < div className='form-layout'>
								<form
									className='Formulaire'
									
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
											onChange={(e)=>{
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
											onChange={(e)=>{
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
											onChange={(e)=>{
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
											onChange={(e)=>{
												settel(e.target.value)
											}}
										/>
										<ErrorMessage
											errors={errors}
											name="telephone"
											render={({ message }) => <p id="Message_erreur">{message}</p>}
										/>
										
										
										  
										<Button  type="submit" buttonSize='btn--wide' buttonColor='lightblue' onClick={() =>{ validate()
										setIsOpen(true)}}>ENVOYER</Button>
										
										{/* <p>{result}</p>  */}
									</div>
									
								</form>
								
								
                                
            </div>
            </div>
        </div>
      
    </div>
  );
}

export default Jepostuleform;
