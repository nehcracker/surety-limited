import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <div className={styles.fadeInDown}>
          <h1>About Us – Surety Limited</h1>
          <div className={styles.underline}></div>
        </div>
        <p className={styles.fadeInUp}>
          A licensed and internationally trusted insurance brokerage and bond consultancy firm
          with a global presence serving clients who demand clarity, compliance, and confidence.
        </p>
        <div className={styles.scrollDown}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
