// services/GeneralInsurance/GeneralInsurance.jsx
import React from 'react';
import styles from './GeneralInsurance.module.css';
import InsuranceCard from './InsuranceCard';

const GeneralInsurance = () => {
  const insuranceProducts = [
    {
      title: 'Motor Insurance',
      description: 'Private and commercial fleet covers, including cross-border use.'
    },
    {
      title: 'Marine & Cargo Insurance',
      description: 'Protect goods in transit via sea, air, or land—door to door.'
    },
    {
      title: 'Property & Fire Insurance',
      description: 'Insure buildings, equipment, inventories, and business premises.'
    },
    {
      title: 'Travel & Aviation Insurance',
      description: 'Personal and corporate travel policies, including evacuation and baggage.'
    },
    {
      title: 'Cyber Risk Insurance',
      description: 'Coverage against cyber breaches, ransomware, and data liability.'
    },
    {
      title: 'General Liability Insurance',
      description: 'Public, product, and third-party liability policies for business operations.'
    }
  ];

  return (
    <section className={styles.insuranceSection} id="general-insurance">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🏢</span> General Insurance Brokerage
          </h2>
          <p className={styles.sectionIntro}>
            We broker a wide range of commercial and personal insurance solutions, tailored to your sector, geography, and risk exposure.
          </p>
        </div>
        
        <div className={styles.insuranceGrid}>
          {insuranceProducts.map((product, index) => (
            <InsuranceCard 
              key={index}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
        
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Access to global carriers for hard-to-place risks</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Competitive premiums, no hidden fees</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Custom coverage limits and flexible terms</p>
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#get-quote" className={styles.ctaButton}>Get a Quote →</a>
        </div>
      </div>
    </section>
  );
};

export default GeneralInsurance;