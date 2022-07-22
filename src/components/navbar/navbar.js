import { AppBar, Toolbar , Box, Menu ,MenuItem , Typography,Button, IconButton} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import logoimg from '../../images/logo1.png';
import MenuIcon from '@mui/icons-material/Menu';
import { lineHeight } from '@mui/system';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const pages = ['Programme', 'Tarif', 'Contact'];
 
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <>
    <AppBar  style={{backgroundColor:'#004AAD' , boxShadow:'0px '}}>
      <Toolbar>
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img style={{width :"90px" , height:"60px",margin:"9px" }} src={logoimg} alt=''  />
          </Typography>
        
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon sx={{display : {xs:"flex"}}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
               
              }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontFamily:'Inter', fontStyle:'normal'}}>{page}</Typography>
                </MenuItem>
              ))}
              <Button
            variant="contained"
            onClick={handleCloseNavMenu}
            
            sx={{backgroundColor:"#E5D011 ", width:"100" , height:"auto",  borderRadius:"10px", 
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            >
                Je postule
                </Button>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              
            }}
          >
            <img style={{width :"90px" , height:"60px",margin:"9px" , display: { xs: 'flex'}}} src={logoimg} alt=''  />
          </Typography>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , justifyContent:'right' } }}>
          <Typography
        
        sx={{ marginRight:'100px',marginTop: '25px',fontFamily:'Inter', fontStyle:'normal',fontWeight:"900",lineHeight:'24px',color:'#E5D011', fontSize:'20px', justifyContent:"center"}}
       >
         Rocket Coding Bootcamp
       </Typography>
            
              <Button
                href="/programme"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:'none' , fontSize:"16px",padding:"6px 40px"}}
              >
                Programme
              </Button>
              <Button
                href="/tarif"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:'none' ,fontSize:"16px" ,padding:"6px 40px"}}
              >
                Tarif
              </Button>
              <Button
                href="/contact"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,textTransform:'none' , fontSize:"16px",padding:"6px 40px"}}
              >
                Contact
              </Button>
            
            <Button
            variant="contained"
            onClick={handleCloseNavMenu}
            
            sx={{backgroundColor:"#E5D011 ", width:"130px" , height:"40px", top:"13px", left:"10px",marginRight:"20px", borderRadius:"10px", 
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", textTransform:'none', fontSize:"16px", color:'#004AAD'}}
            >
                Je postule
                </Button>
          </Box>

      </Toolbar>
    </AppBar>
    </>
  );
}

export default Navbar;
