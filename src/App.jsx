import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
