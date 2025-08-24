import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Header from './components/common/Header/Header';
import Footer from './components/common/Button/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
