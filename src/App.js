
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Map from '../src/components/map'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>      
     
   
    </div>
  );
}

export default App;
