import './App.css';
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
      <CompareSlider/>
      <Footer/>
    </div>
  );
}

export default App;
