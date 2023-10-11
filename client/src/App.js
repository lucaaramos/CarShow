import './app.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppNavbar from './components/NavBar';
import Cars from './components/Cars';

function App() {
  return (
    <Router>
      <div className="App">
      <AppNavbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/autos" element={<Cars/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

