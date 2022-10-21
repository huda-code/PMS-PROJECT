import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import { Routes, Route } from "react-router-dom"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import PrivateRoutes from './components/PrivateRoutes';

import Signup from './components/Signup';
import Login from './components/Login';

import Charts from './components/Chart.js'



function App() {
 
  
  return (
    <> 
    <Navbar/> 
    <Routes>
  
    <Route path="/" element={<Home  />} />
    <Route path="/signup" element={<Signup  />} />
        <Route path="/login" element={<Login  />} />

           <Route path = "/Chart" element={<Charts/>} />
       
    </Routes>
  
    </> 
    
  );
}
export default App;