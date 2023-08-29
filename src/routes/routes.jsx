import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import LoginForm from '../components/LoginForm';
import Contact from '../components/Contact';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/contact" element={<Contact />} /> 
      
    </Routes>
  );
};

export default RoutesConfig;
