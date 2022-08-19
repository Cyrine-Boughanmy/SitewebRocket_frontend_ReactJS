import { ErrorMessage } from '@hookform/error-message';
import { Box, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, MenuItem, Modal, TextField, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../contactForm/form';
import { motion } from 'framer-motion';
import InscriptionForm from '../homepage/header/inscriptionform';
import axios from 'axios';
import { data } from 'jquery';




const Popupinscription = (props) => {
	const{OpenPopup,SetOpenPopup}=props;
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      SetOpenPopup(true);
    };
    const handleClose = () => {
      SetOpenPopup(false);
    };
	return (
		 	  <div >
<Modal
        fullWidth
      open={OpenPopup}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title">
        <DialogContent style={{backgroundColor:'#014AAD'}} >
      <InscriptionForm/>
        </DialogContent>
      </Modal>
</div>
	);
   }
// 	const [open, setOpen] = useState(false);
  
// 	const onOpenModal = () => {
// 	  setOpen(true);
// 	};
  
// 	const onCloseModal = () => {
// 	  setOpen(false);
// 	};
  
// 	const [form, setForm] = useState("");
// 	const [mail, setMail] = useState("");
// 	const {
// 	  register,
// 	  formState: { errors },
// 	  handleSubmit
// 	} = useForm();
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [nom, SetNom] = useState("");
// 	const [prenom, setprenom] = useState("");
// 	const [email, setemail] = useState("");
// 	const [tel, settel] = useState("");
// 	const validate = () => {
// 	  let user = { nom: "", prenom: "", email: "", tel: "" };
// 	  user.nom = nom;
// 	  user.prenom = prenom;
// 	  user.email = email;
// 	  user.tel = tel;
// 	  console.log(user);
// 	};
  
// 	const [date_reunion, setDate_reunion] = useState("");
// 	const handleChange = (event) => {
// 	  setDate_reunion(event.target.value);
// 	};
  
// 	const envoi = async (data) => {
// 	  console.log("==============ENVOIE=======");
// 	  console.log(data);
// 	  console.log("==============FIN=======");
  
// 	  await axios
// 		.post(
// 		  "http://localhost:8000/formulaire_reunion_info/liste/",
// 		  { ...data } // {...data, message: "...."}
// 		)
// 		.then((response) => {
// 		  console.log(response.data);
// 		  window.location.reload(false);
// 		})
// 		.catch((e) => {
// 		  console.log(e.response);
// 		});
// 	};
  
// 	return (
// 	  <div >
		
		
// 		<Modal open={open} onClose={onCloseModal}>
// 		  <motion.form
// 			id="myform"
// 			method="POST"
// 			whileHover={{ scale: 1.05 }}
// 			className="Formulaire"
// 			onSubmit={handleSubmit((data) => {
// 			  data.preventDefault();
// 			  envoi(data);
// 			})}
// 		  >
// 			<h5> S'inscrire </h5>
  
// 			<div className="Categorie_Formulaire">
// 			  {/** FIRST NAME INPUT */}
  
// 			  <input
// 				{
// 				  /* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */
  
// 				  ...register("nom", {
// 					required: "* Ce champs est requis",
// 					value: data.nom,
// 					shouldUnregister: false
// 				  })
// 				}
// 				placeholder="Nom *"
// 			  />
  
// 			  {/** Show an error message under the input if the field does not respect validation rules */}
// 			  <ErrorMessage
// 								  errors={errors}
// 								  name="nom"
// 								  render={({ message }) => <p id="Message_erreur">{message}</p>}
// 							  />
  
// 			  {/* --- LAST NAME INPUT --- */}
// 			  <input
// 				{...register("prenom", {
// 				  required: "* Ce champs est requis"
// 				})}
// 				placeholder="Prénom *"
// 			  />
  
// 			  <ErrorMessage
// 								  errors={errors}
// 								  name="prenom"
// 								  render={({ message }) => <p id="Message_erreur">{message}</p>}
// 							  />
  
// 			  {/* --- PHONE NUMBER INPUT --- */}
// 			  <input
// 				{...register("telephone", {
// 				  required: "* Ce champs est requis",
// 				  pattern: {
// 					value: /\d+/,
// 					message: "Ce champs ne comprend que des chiffres."
// 				  }
// 				})}
// 				placeholder="Telephone *"
// 			  />
// 			  <ErrorMessage
// 								  errors={errors}
// 								  name="telephone"
// 								  render={({ message }) => <p id="Message_erreur">{message}</p>}
// 							  />
  
// 			  {/* --- EMAIL INPUT --- */}
// 			  <input
// 				{...register("email", {
// 				  required: "* Ce champs est requis"
// 				})}
// 				placeholder="Email *"
// 				onChange={(e) => {
// 				  setemail(e.target.value);
// 				}}
// 			  />
// 			  <ErrorMessage
// 								  errors={errors}
// 								  name="email"
// 								  render={({ message }) => <p id="Message_erreur">{message}</p>}
// 							  />
  
// 			  {/* <p>{result}</p>  */}
// 			</div>
// 			<button type="submit" className="envoyer-btn" form="myform">
// 			  Je m'inscris
// 			</button>
// 		  </motion.form>
// 		</Modal>
// 	  </div>
// 	);
//   };
  

export default Popupinscription;
