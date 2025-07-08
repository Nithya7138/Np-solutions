// src/App.js
import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import ElectricalServices from './components/ElectricalServices';
import PlumbingServices from './components/plumbingservice';
import CCTVServices from './components/cctvservices';
import ContactForm from './components/contactform.jsx';

function App() {
  return (
    <>
      <div>Test content</div>
      <Navbar />
      <HeroSection />
      <ElectricalServices />
      <PlumbingServices />
      <CCTVServices />
      <ContactForm />
    </>
  );
}

export default App;
