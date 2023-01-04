import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Map from '../src/components/map2'
import Home from './pages/Home';
import React from 'react';

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
