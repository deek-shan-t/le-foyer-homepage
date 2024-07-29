import './App.css';
<<<<<<< HEAD
import AboutUs from './components/about_us';
import CompareSlider from './components/CompareSlider';
import Footer from './components/Footer';
import QuoteForm from './components/form';
import Header from './components/nav_bar';
import Navbar from './components/nav_bar';
function App() {
  return (
    <div className="App">
      
=======
import OurServices from './components/OurServices';
import WhyUs from './components/WhyUs';
import FiveSteps from './components/FiveSteps';
import CompareSlider from './components/CompareSlider';
import Footer from './components/Footer';

  function App() {
    return (
      <div className="App">
      <OurServices />
      <WhyUs />
      <FiveSteps />
>>>>>>> e4f15571efe90efcffb75417026ee83251e94322
      <CompareSlider/>
      <QuoteForm/>
      <div> <Header/></div>
      <AboutUs/>
      <Footer/>
    
    </div>
  );
}

export default App;
