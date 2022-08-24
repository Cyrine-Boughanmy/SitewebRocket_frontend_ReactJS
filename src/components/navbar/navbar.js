import { AppBar, Toolbar , Box, Menu ,MenuItem , Typography, IconButton, Container, Avatar, Hidden, SwipeableDrawer, Divider, List, ListItem, ListItemText, Drawer} from '@mui/material';

import React, { useState } from 'react';
import logoimg from '../../images/logo1.png';
import MenuIcon from '@mui/icons-material/Menu';
import {Link as link} from 'react-router-dom';
import { Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '../button/Button';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { motion } from 'framer-motion';


const navigationLinks = [
  
  { name: "Programme", href: "#programme" },
  { name: "Tarif", href: "#tarif" },
  { name: "Contact", href: "#contactform" },
];
const navigationMobileLinks = [
  
  { name: "Programme", href: "/#programme" },
  { name: "Tarif", href: "/#tarif" },
  { name: "Contact", href: "/#contactform" },
];
const useStyles = makeStyles((theme) => ({
  link: {
    // marginRight: 20,
    fontFamily:"'Arimo', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color:"#014AAD" 
    // color:"rgba(0, 0, 0, 0.87)"
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
 
  const [ state, setState ] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List className="menu-sidee">
      <Link className={styles.link}
                color="#014AAD" 
                href="/" 
                style={{ textDecoration: 'none'}}>
      <ListItem style={{ marginLeft: '5px'}}>
      Rocket Coding
				</ListItem>
        </Link >
				{navigationMobileLinks.map((item) => (
					<HashLink className={styles.link}
          color="textPrimary" 
          to={item.href} 
          style={{ textDecoration: 'none'}}
          >
						<ListItem button style={{ marginLeft: '5px'}}>
							<ListItemText  primary={item.name}  />
						</ListItem>
					</HashLink>
				))}
        <HashLink to="/#contactform" style={{ textDecoration: 'none'}}>
        <ListItem>
        <Button buttonSize='btn--medium' buttonColor='primary'
            
            >
                Je postule
                </Button>
				</ListItem>
        </HashLink>
				
				
			</List>
		</div>
	);

  

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
            <IconButton edge="start" aria-label="menu">
									{[ 'right' ].map((anchor) => (
										<React.Fragment key={anchor}>
											<MenuIcon style={{color:"#FFFFFF"}} onClick={toggleDrawer(anchor, true)} id="Icon_Navbar" />

											<Drawer
												id="test"
												anchor={anchor}
												open={state[anchor]}
												onClose={toggleDrawer(anchor, false)}
											>
												<CloseIcon
													onClick={toggleDrawer(anchor, false)}
													id="Icon_Navbar_Close"
                          style={{ color:"#014AAD" }}
												/>
												{list(anchor)}
											</Drawer>
										</React.Fragment>
									))}
								</IconButton>
          </Typography>
          {/* <Typography 
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
          {navigationMobileLinks.map((item) => (
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
      </SwipeableDrawer> */}
      
        
      </Toolbar>
    </AppBar>
    
  );
}

export default Navbar;