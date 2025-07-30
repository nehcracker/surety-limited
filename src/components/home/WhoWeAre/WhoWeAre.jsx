import React from 'react';
import styles from './WhoWeAre.module.css';
import Button from '../../common/Button/Button';

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.globeIcon}>🌍</span> Who We Are
        </h2>
        
        <div className={styles.content}>
          <p className={styles.description}>
            Surety Limited is a leading global insurance and bond brokerage firm, offering trusted, fast, 
            and cost-effective risk solutions for businesses across industries. From performance bonds to 
            international insurance covers, we provide expert guidance and unmatched value—helping our clients 
            operate with confidence and peace of mind.
          </p>
          
          <ul className={styles.featuresList}>
            <li>
              <span className={styles.checkmark}>✔</span>
              Global operations and partnerships
            </li>
            <li>
              <span className={styles.checkmark}>✔</span>
              A-rated insurer network
            </li>
            <li>
              <span className={styles.checkmark}>✔</span>
              Sector-specific expertise
            </li>
            <li>
              <span className={styles.checkmark}>✔</span>
              Transparent & compliant processes
            </li>
          </ul>
          
          <div className={styles.ctaWrapper}>
            <Button 
              variant="secondary" 
              to="/about"
              className={styles.learnMoreBtn}
            >
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
