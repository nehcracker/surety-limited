import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleRequestQuote = () => {
    navigate('/quote-request');
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Performance Bonds – Assurance for Project Delivery
          </h1>
          <p className={styles.subtext}>
            We provide reliable Performance Bonds that guarantee your projects are completed on time, 
            within budget, and to the agreed standards.
          </p>
          <button 
            className={styles.ctaButton} 
            onClick={handleRequestQuote}
            aria-label="Request a quote for performance bonds"
          >
            Request a Quote
          </button>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualElement}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;