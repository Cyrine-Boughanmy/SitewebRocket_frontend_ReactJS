import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, useMediaQuery, useTheme } from '@mui/material';
import { React, useState } from 'react';

const popupvalidation = (props) => {

    const{OpenPopup,SetOpenPopup }=props;
    
    
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
       popup test
        </DialogContent>
        
      </Dialog>
    </div>
  )
}

export default popupvalidation
