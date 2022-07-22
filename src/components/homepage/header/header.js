import React from 'react';
import './header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from '../../section/section';
import { header } from '../pages';




const Header = () => {

 

  return (
    <>
    <Section {...header}/>
</>);
  }


  export default Header;