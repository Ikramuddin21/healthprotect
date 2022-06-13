import './App.css';
import Hero from './Pages/Home/Hero/Hero';
import Services from './Pages/Home/Services/Services';
import ClientsReview from './Pages/Home/ClientsReview/ClientsReview';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ClientsReview />
    </>
  );
}

export default App;
