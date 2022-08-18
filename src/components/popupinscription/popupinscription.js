import { ErrorMessage } from '@hookform/error-message';
import { Box, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, MenuItem, Modal, TextField, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../contactForm/form';
import { motion } from 'framer-motion';
import InscriptionForm from './inscriptionform';
import axios from 'axios';
import { data } from 'jquery';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Popupinscription = (props) => {

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

		const [date_reunion, setDate_reunion] = useState('');
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
  


    const{OpenPopup,SetOpenPopup}=props;
    const [open, setOpen] = useState(false);
    

    const handleClickOpen = () => {
      SetOpenPopup(true);
    };
  
    const handleClose = () => {
      SetOpenPopup(false);
    };
   

  return (
    <div>
      {/* <Modal
        open={OpenPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal> */}
      
      <Dialog 
      
	    fullWidth
      open={OpenPopup}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title">
        <DialogContent style={{backgroundColor:'#014AAD'}} >
        <motion.form
         id="myform"  
					whileHover={{scale : 1.05}}
						className="Formulaire"
						onSubmit={handleSubmit((data) => {
              data.preventDefault();
							envoi(data);
              handleClose();


						})}
					>
						<h5> S'inscrire </h5>

						<div className="Categorie_Formulaire">
							{/** FIRST NAME INPUT */}
							<input
								{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

								register('nom', {
									required: '* Ce champs est requis',
									value : data.nom,
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
                            {/* <InputLabel id="demo-simple-select-label"
                            {...register('date_reunion', {
                                required: '* Ce champs est requis'
                            })}
                            ></InputLabel>
                            <Select
							sx={{border: "1px solid #014AAD"}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={date_reunion}
                            label="Date réunion"
                            onChange={handleChange}
                            > */}
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
							</TextField>
							</ThemeProvider>
                            {/* </Select> */}
                            <ErrorMessage
                                errors={errors}
                                name="date_reunion"
                                render={({ message }) => <p id="Message_erreur">{message}</p>}
                            />
                                </FormControl>
                              


							<button  type="submit" className='envoyer-btn' form="myform"  >Je m'inscris</button>

							{/* <p>{result}</p>  */}
						</div>
					</motion.form>
      
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default Popupinscription;
