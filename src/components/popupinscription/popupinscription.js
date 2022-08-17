import { ErrorMessage } from '@hookform/error-message';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, useMediaQuery, useTheme } from '@mui/material';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../contactForm/form';
import { motion } from 'framer-motion';
import InscriptionForm from './inscriptionform';

const Popupinscription = (props) => {

    const{OpenPopup,SetOpenPopup }=props;
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
      SetOpenPopup(true);
    };
  
    const handleClose = () => {
      SetOpenPopup(false);
    };
   

  return (
    <div>
      
      <Dialog 
      
	  fullWidth
      open={OpenPopup}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title">
        <DialogContent style={{backgroundColor:'#014AAD'}} >
        <InscriptionForm/>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default Popupinscription;
