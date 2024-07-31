import './App.css';
import OurServices from './components/OurServices';
import WhyUs from './components/WhyUs';
import FiveSteps from './components/FiveSteps';
import CompareSlider from './components/CompareSlider';
import Footer from './components/Footer';
import QuoteForm from './components/form';
import Header from './components/nav_bar';
import Navbar from './components/nav_bar';
import AboutUs from './components/about_us';
import Design_Stories from './components/Design_Stories';

  function App() {
    return (
      <div className="App">
      <Header/>
      <QuoteForm/>
      <AboutUs/>
      <OurServices />
      <WhyUs />
      <FiveSteps />
      <CompareSlider/>
      <Design_Stories/>
      <Footer/>
    </div>
  )
}

export default App
