import './App.css';
import React from 'react';
import Login from './pages/login';
import Signup from './pages/signup';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
   
  );
}



export default App;
