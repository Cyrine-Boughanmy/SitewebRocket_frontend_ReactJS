
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/homepage/home';
import{Route, Routes} from 'react-router-dom';
import Programme from './components/programme/Programme';
import Tarif from './components/tarif/Tarif';
import Formulaire from './components/contactForm/contactform';
import Objectifs from './components/homepage/objectifs/objectifs';
import CookieBanner from './components/cookiebanner/cookiebanner';
function App() {
  return (
    <>
      <Navbar/>
  
     
  <Routes>
        <Route path="/" element={<Home/>}/>    
        <Route path="/tarif" element={<Tarif/>} />
        <Route path="/programme" element={<Programme/>}/> 
        <Route path="/contactform" element={<Formulaire/>}/> 

              
  </Routes>
      
  
  
    </>
  );
}

export default App;
