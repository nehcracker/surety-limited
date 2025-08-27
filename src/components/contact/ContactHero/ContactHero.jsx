import React from 'react';
import officeBuilding from '../../../assets/images/about/office-building.jpg';
import styles from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.icon}>🤝</span>
            Contact Us
          </div>
          
          <h1 className={styles.heading}>
            We're Here to Help
          </h1>
          
          <p className={styles.subheading}>
            Whether you're seeking a quote, partnership, or detailed consultation, 
            our global team of insurance and bond experts is ready to support you. 
            At <strong>Surety Limited</strong>, we ensure prompt, professional 
            communication across time zones and jurisdictions.
          </p>

          <div className={styles.quickStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24hrs</div>
              <div className={styles.statLabel}>Response Time</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Countries Served</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <span className={styles.buttonIcon}>📞</span>
              Call Now
            </button>
            <button className={styles.secondaryButton}>
              <span className={styles.buttonIcon}>📧</span>
              Send Email
            </button>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img 
              src={officeBuilding} 
              alt="Global business communication" 
              className={styles.heroImage}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default ContactHero;