import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Doctors from './Pages/Home/Doctors/Doctors';
import Shop from './Pages/Shop/Shop';
import Appointment from './Pages/Appointment/Appointment';
import AuthProvider from './context/AuthProvider';
import LoginRegister from './Pages/Authentication/LoginRegister/LoginRegister';
import About from './Pages/About/About';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<PrivateRoute>
          <Appointment />
        </PrivateRoute>} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
