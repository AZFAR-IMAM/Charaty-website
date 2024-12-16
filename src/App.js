import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import LoginForm from './components/Registration/LoginForm.jsx';
import Signup from './components/Registration/Signup.jsx';
import DonationForm from './components/Donation/DonationForm.jsx';


function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/DonationForm' element={<DonationForm/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
