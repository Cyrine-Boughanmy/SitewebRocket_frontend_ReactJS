import { Dialog, DialogContent} from '@mui/material'
import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'transparent',
  padding: '30px',
  zIndex: 2000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


export default function Popupinscription({ open, children, onClose }) {
  
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none"
          },
        }}
        maxWidth
        sx={{ height: "auto", backgroundColor: 'transparent' }}

        open={open}
        onClose={onClose}

      >
        <DialogContent style={{ backgroundColor: 'transparent' }} >
          <button style={{ backgroundColor: 'transparent', border: 'none', fontsize: '25px', position: 'absolute', top: '12px', right: '16px', color: "#FFFFFF" }} onClick={onClose}>Fermer</button>
          <br></br>
          {children}</DialogContent>
      </Dialog>
      
    </>,

    document.getElementById('portal')
  )
}
