import './App.css';
import CompareSlider from './components/CompareSlider';
import OurServices from './components/OurServices'
import WhyUs from './components/WhyUs'
import FiveSteps from './components/FiveSteps'
function App() {
  return (
    <div className="App">
      <OurServices/>
      <WhyUs/>
      <CompareSlider/>
      <FiveSteps/>
    </div>
  );
}

export default App;
