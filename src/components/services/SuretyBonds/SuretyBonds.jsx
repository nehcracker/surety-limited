// services/SuretyBonds/SuretyBonds.jsx
import React from 'react';
import styles from './SuretyBonds.module.css';
import BondCard from './BondCard';

const SuretyBonds = () => {
  const bonds = [
    {
      title: 'Performance Bonds',
      description: 'Guarantee successful project completion in line with contractual terms.'
    },
    {
      title: 'Bid Bonds',
      description: 'Assure project owners of your commitment and financial strength at tender stage.'
    },
    {
      title: 'Advance Payment Guarantees',
      description: 'Protect upfront funds paid to contractors or suppliers.'
    },
    {
      title: 'Customs & Tax Bonds',
      description: 'Support import/export operations by guaranteeing compliance with customs duties.'
    },
    {
      title: 'Court & Judicial Bonds',
      description: 'Required in legal proceedings to secure claims or comply with court orders.'
    },
    {
      title: 'Financial Guarantees',
      description: 'Backed by banks or insurers to assure repayment of loans or obligations.'
    }
  ];

  return (
    <section className={styles.suretySection} id="surety-bonds">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🔒</span> Surety & Bonding Solutions
          </h2>
          <p className={styles.sectionIntro}>
            We provide a full suite of surety bonds for contractual, regulatory, and judicial obligations:
          </p>
        </div>
        
        <div className={styles.bondsGrid}>
          {bonds.map((bond, index) => (
            <BondCard 
              key={index}
              title={bond.title}
              description={bond.description}
            />
          ))}
        </div>
        
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Fast processing – most bonds issued within 48–72 hours</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Jurisdiction-specific templates and compliance guidance</p>
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#request-bond" className={styles.ctaButton}>Request a Bond →</a>
        </div>
      </div>
    </section>
  );
};

export default SuretyBonds;