// services/ServiceCTA/ServiceCTA.jsx
import React from 'react';
import styles from './ServiceCTA.module.css';

const ServiceCTA = () => {
  const benefits = [
    {
      icon: '🌍',
      title: 'Licensed Globally',
      description: 'We operate in multiple jurisdictions and ensure full compliance.'
    },
    {
      icon: '⚡',
      title: 'Speed & Efficiency',
      description: 'Get bonds and insurance placed fast without bureaucracy.'
    },
    {
      icon: '🎯',
      title: 'Customized Solutions',
      description: 'Every client receives a tailored strategy.'
    },
    {
      icon: '🏆',
      title: 'A-Rated Carrier Network',
      description: 'We only work with top-rated insurers and sureties.'
    },
    {
      icon: '🤝',
      title: 'End-to-End Support',
      description: 'From documentation to post-issuance service.'
    },
    {
      icon: '📊',
      title: 'Competitive Rates',
      description: 'Leverage our relationships for the best pricing in the market.'
    }
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.ctaTitle}>
            Why Choose Surety Limited?
          </h2>
          <p className={styles.ctaSubtitle}>
            Experience the difference with our comprehensive surety and insurance solutions
          </p>
        </div>

        {/* Benefits Grid - Organized in Rows */}
        <div className={styles.benefitsContainer}>
          {/* First Row - 3 items */}
          <div className={styles.benefitsRow}>
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row - 3 items */}
          <div className={styles.benefitsRow}>
            {benefits.slice(3, 6).map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.ctaActions}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaActionTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaActionDescription}>
              Join thousands of satisfied clients who trust us with their surety and insurance needs
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="#contact-us" className={styles.primaryButton}>
              Request a Consultation
            </a>
            <a href="#services" className={styles.secondaryButton}>
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;