import './App.css';
import Doctors from './Pages/Home/Doctors/Doctors';
import Gallery from './Pages/Home/Gallery/Gallery';
import Hero from './Pages/Home/Hero/Hero';
import News from './Pages/Home/News/News';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <Gallery />
      <News />
      <Footer />
    </>
  );
}

export default App;
