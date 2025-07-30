import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🌍',
      title: 'Global Reach, Local Insight',
      description: 'Licensed brokers operating across key international markets.'
    },
    {
      icon: '⚡',
      title: 'Rapid Issuance & Customization',
      description: 'Timely delivery of bonds and insurance documents, tailored to your specific needs.'
    },
    {
      icon: '💼',
      title: 'A-Rated Insurer Network',
      description: 'We only work with reputable, financially strong carriers.'
    },
    {
      icon: '💸',
      title: 'Unmatched Pricing',
      description: 'Best-in-class global rates with flexible premium structures.'
    },
    {
      icon: '📜',
      title: 'Regulatory Compliant',
      description: 'Full adherence to global compliance and anti-money laundering standards.'
    }
  ];

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Surety Limited?</h2>
        
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="/contact" className={styles.ctaButton}>
            Contact Our Advisors →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
