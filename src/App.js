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
import useScrollToTop from './hooks/useScrollToTop';
import Insurance from './pages/Services/Insurance/GeneralInsurance/GeneralInsurance'; // fixed import path
import QuoteRequest from './pages/QuoteRequest/QuoteRequest';
import PerformanceBonds from './pages/Services/Bonds/PerformanceBonds/PerformanceBonds';
import Sitemap from './pages/Sitemap/Sitemap';
import './App.css';

function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="App">
          <ScrollToTopController />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/bonds" element={<Bonds />} />
              <Route path="/services/insurance" element={<Insurance />} />
              <Route path="/quote-request" element={<QuoteRequest />} />
              <Route path="/services/bonds/performance-bonds" element={<PerformanceBonds />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

// Component to handle scroll behavior
const ScrollToTopController = () => {
  useScrollToTop();
  return null;
};

export default App;
