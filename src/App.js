import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeadProvider } from 'react-head';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Bonds from './pages/Services/Bonds/Bonds';
import Header from './components/common/Header/Header';
import Footer from './components/common/Button/Footer/Footer'; // kept original import

import './App.css';

function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/bonds" element={<Bonds />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;
