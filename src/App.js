import './App.css';
import Doctors from './Pages/Home/Doctors/Doctors';
import Gallery from './Pages/Home/Gallery/Gallery';
import Hero from './Pages/Home/Hero/Hero';
import News from './Pages/Home/News/News';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Appointment from './Pages/Home/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
