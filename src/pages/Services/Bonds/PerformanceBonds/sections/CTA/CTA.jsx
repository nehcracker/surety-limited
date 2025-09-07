import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  const handleRequestQuote = () => {
    // Add navigation or form logic here
    console.log('Request Quote clicked');
  };

  const handleLearnMore = () => {
    // Add navigation logic here
    console.log('Learn More clicked');
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Secure Your Project with Confidence</h2>
            <p className={styles.subtext}>
              Let us help you safeguard your investment with a trusted Performance Bond.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton} 
              onClick={handleRequestQuote}
              aria-label="Request a quote for performance bonds"
            >
              Request a Quote
            </button>
            <button 
              className={styles.secondaryButton} 
              onClick={handleLearnMore}
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.decorativeElements}>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;