import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Surety Bonds & Insurance Brokerage Solutions
        </h1>
        <p className={styles.subheadline}>
          Tailored surety and insurance products with unmatched global reach, 
          best-in-class pricing, and full regulatory compliance.
        </p>
        <div className={styles.ctaContainer}>
          <button
            className={styles.primaryButton}
            onClick={() => navigate('/quote-request')}
          >
            Get a Free Quote
          </button>
          <button className={styles.secondaryButton}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
