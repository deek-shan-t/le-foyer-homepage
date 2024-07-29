import './App.css';
import AboutUs from './components/about_us';
import CompareSlider from './components/CompareSlider';
import Footer from './components/Footer';
import QuoteForm from './components/form';
import Header from './components/nav_bar';
import Navbar from './components/nav_bar';
function App() {
  return (
    <div className="App">
      
      <CompareSlider/>
      <QuoteForm/>
      <div> <Header/></div>
      <AboutUs/>
      <Footer/>
    
    </div>
  );
}

export default App;
