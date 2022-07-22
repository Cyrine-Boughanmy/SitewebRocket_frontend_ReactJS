
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/homepage/home';
import{Route, Routes} from 'react-router-dom';
import Programme from './components/programme/Programme';
import Contact from './components/contact/contact';
import Tarif from './components/tarif/Tarif';
function App() {
  return (
    <>
      <Navbar/>
      
     <Routes>
        <Route path="/" element={<Home/>}/>    
        <Route path="/" element={<Tarif/>} />
        <Route path="/programme" element={<Programme/>}/>        
        <Route path="/contact" element={<Contact/>}/>  
              
      </Routes>
      
      
    </>
  );
}

export default App;
