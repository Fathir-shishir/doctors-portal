
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appoinment from './Components/Pages/Appoinment/Appoinment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Nav from './Components/Pages/Shared/Nav/Nav';

function App() {
  return (
    <div className='max-w-7xl mx-auto '>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment></Appoinment>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
      
    </div>
  );
}

export default App;
