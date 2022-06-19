import './App.css';
import Gallery from './Pages/Home/Gallery/Gallery';
import Hero from './Pages/Home/Hero/Hero';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
    </>
  );
}

export default App;
