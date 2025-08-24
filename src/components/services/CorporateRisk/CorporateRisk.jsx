// services/CorporateRisk/CorporateRisk.jsx
import React from 'react';
import styles from './CorporateRisk.module.css';
import RiskCard from './RiskCard';

const CorporateRisk = () => {
  const riskProducts = [
    {
      title: 'Directors & Officers (D&O) Liability',
      description: 'Protect your board and management against decisions made in office.'
    },
    {
      title: 'Trade Credit Insurance',
      description: 'Safeguard receivables from non-payment and insolvency risk.'
    },
    {
      title: 'Employee Group Benefits',
      description: 'Group life, health, pension and disability programs for staff.'
    },
    {
      title: 'Business Interruption Cover',
      description: 'Protect your revenue from operational downtime due to unforeseen events.'
    },
    {
      title: 'Product Recall & Defect Liability',
      description: 'Ideal for manufacturers and exporters seeking compliance in global markets.'
    }
  ];

  return (
    <section className={styles.riskSection} id="corporate-risk">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🏦</span> Corporate & Specialty Risk Solutions
          </h2>
          <p className={styles.sectionIntro}>
            Our advisory and placement services extend to complex risk profiles, especially in high-value or multi-jurisdictional environments.
          </p>
        </div>
        
        <div className={styles.riskGrid}>
          {riskProducts.map((product, index) => (
            <RiskCard 
              key={index}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
        
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Policy structuring support</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Reinsurance-backed solutions available for large exposures</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Multinational program capability</p>
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#speak-specialist" className={styles.ctaButton}>Speak to a Specialist →</a>
        </div>
      </div>
    </section>
  );
};

export default CorporateRisk;