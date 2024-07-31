import './App.css';
import OurServices from './components/OurServices';
import WhyUs from './components/WhyUs';
import FiveSteps from './components/FiveSteps';
import CompareSlider from './components/CompareSlider';
import Footer from './components/Footer';
import QuoteForm from './components/Form';
import Header from './components/NavBar';
import AboutUs from './components/about_us';
import DesignStories from './components/DesignStories';

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
      <DesignStories/>
      <Footer/>
    </div>
  )
}

export default App
