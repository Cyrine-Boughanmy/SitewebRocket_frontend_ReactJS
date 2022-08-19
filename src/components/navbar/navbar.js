import { AppBar, Toolbar , Box, Menu ,MenuItem , Typography, IconButton, Container, Avatar, Hidden, SwipeableDrawer, Divider, List, ListItem} from '@mui/material';

import React, { useState } from 'react';
import logoimg from '../../images/logo1.png';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '@mui/material';
import { HashLink as HLink } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles';

import { Button } from '../button/Button';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { motion } from 'framer-motion';


const navigationLinks = [
  
  { name: "Programme", href: "#programme" },
  { name: "Tarif", href: "#tarif" },
  { name: "Contact", href: "#contactform" },
];
const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    fontFamily:"'Arimo', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px"
  },
  avatar : {
    marginRight: "auto",
    color: "#FFFFFF",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid gray",
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
    
  },
}));

const Navbar = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
 
  
  

  return (
    
    <AppBar  position="sticky" style={{backgroundColor:"#014AAD"  , boxShadow:'0px '}}>
      <Toolbar>
      
      <Typography
            
           
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily:"'Arimo', sans-serif",
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
               marginRight:"auto"
            }}
          >
            <motion.img 
            whileHover={{scale : 1.15}}
            style={{width :"90px" , height:"60px",margin:"9px" }} src={logoimg} alt=''  />

          </Typography>
          <Typography sx={{display: { xs: 'none', md: 'flex' }, fontFamily:"'Arimo', sans-serif",}}>
          <Typography
          component="a"
          href="/"
          
          sx={{ marginRight:'20px',fontFamily:"'Arimo', sans-serif", fontStyle:'normal',fontWeight:"900",lineHeight:'24px',color:'#FF9F1C', fontSize:'20px', justifyContent:"center" ,marginTop:"7px" , textDecoration:"none"}}>
                Rocket Coding 
          </Typography>
          <Typography >
            {navigationLinks.map((item) => (
              <Link
                sx={{marginRight:"20px", fontFamily:"'Arimo', sans-serif",}}
                className={styles.link}
                color="#FFFFFF"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
            <Link
                sx={{marginRight:"20px",fontFamily:"'Arimo', sans-serif",}}
                className={styles.link}
                color="#FFFFFF"
                underline="none"
                href="#contactform"
              
              >
                <Button buttonSize='btn--medium' buttonColor='primary'
            
            >
                Je postule
                </Button>
              </Link>
          </Typography>
          </Typography>
          <Typography 
          sx={{display: { xs: 'flex', md: 'none' },}}
          >
            <IconButton>
              <MenuIcon style={{color:"#FFFFFF"}} onClick={() => setOpen(true) }/>
            </IconButton>
          </Typography>
          <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem>
          <Link
                sx={{marginRight:"20px"}}
                className={styles.link}
                color="textPrimary"
                underline="none"
                href="/"
              
              >
                Rocket Coding
              </Link>
          </ListItem>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
          <ListItem>
          <Link
                sx={{marginRight:"20px"}}
                className={styles.link}
                color="#FFFFFF"
                underline="none"
                href="/contactform"
              
              >
                <Button buttonSize='btn--medium' buttonColor='primary'
            
            >
                Je postule
                </Button>
              </Link>
          </ListItem>

        </List>
      </SwipeableDrawer>
        
      </Toolbar>
    </AppBar>
    
  );
}

export default Navbar;
