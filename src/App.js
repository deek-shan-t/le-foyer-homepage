import { Outlet } from 'react-router-dom';
import './App.css';
import CompareSlider from './components/CompareSlider';
import DesignQuiz from './components/DesignQuiz';
function App() {
  return (
    <div className="App">
      <CompareSlider/>
    </div>
  );
}

export default App;
