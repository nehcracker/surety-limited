import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero} role="banner">
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.fadeIn : ''}`}>
          <h1 className={styles.title}>
            General Insurance Brokerage
          </h1>
          <p className={styles.subtitle}>
            We provide reliable general insurance solutions that safeguard what matters most to you. 
            From property and vehicles to travel and cyber protection, our brokerage connects you 
            with trusted insurers to deliver coverage that fits your needs and budget.
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryBtn} aria-label="Get a quote for insurance coverage">
              Get Quote
            </button>
            <button className={styles.secondaryBtn} aria-label="Learn more about our services">
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.floatingElements}>
          <div className={styles.shield}></div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;