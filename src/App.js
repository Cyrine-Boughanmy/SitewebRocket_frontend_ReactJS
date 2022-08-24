
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/homepage/home';
// import{Route, Routes} from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Programme from './components/programme/Programme';
import Tarif from './components/tarif/Tarif';
import Formulaire from './components/contactForm/contactform';
import Forminscriptionreunion from './components/homepage/header/forminscriptionreunion';

function App() {

  
  return (
    <>
      
      {/* <Forminscriptionreunion/> */}
     
      <Router>
        <Navbar/>
  <Routes>
 
        <Route exact path="/" element={<Home/>}>  </Route>
        <Route exact path="/tarif" element={<Tarif/>} ></Route>
        <Route exact path="/programme" element={<Programme/>}></Route> 
        <Route exact path="/contactform" element={<Formulaire/>}> </Route>
        <Route exact path="/forminscriptionreunion" element={<Forminscriptionreunion/>}></Route>
              
  </Routes></Router>
  
  
  
    </>
  );
}

export default App;
