import React from 'react';
import { Link } from 'react-router-dom';
import styles from './KeyOfferings.module.css';
import ServiceCard from './ServiceCard';

// Import service icons
import bondsIcon from '../../../assets/images/services/bonds-icon.png';
import insuranceIcon from '../../../assets/images/services/insurance-icon.png';
import riskIcon from '../../../assets/images/services/risk-icon.png';
import globalIcon from '../../../assets/images/services/global-icon.png';

const KeyOfferings = () => {
  const services = [
    {
      icon: bondsIcon,
      title: "Surety & Bonds",
      services: [
        "Performance Bonds",
        "Bid Bonds",
        "Advance Payment Guarantees",
        "Customs & Court Bonds",
        "Financial Guarantees"
      ],
      linkTo: "/services/bonds"
    },
    {
      icon: insuranceIcon,
      title: "General Insurance Covers",
      services: [
        "Motor Insurance (Private & Commercial)",
        "Marine & Cargo Insurance",
        "Property & Fire Insurance",
        "Travel & Aviation Insurance",
        "Cyber Risk Insurance"
      ],
      linkTo: "/services/general-insurance"
    },
    {
      icon: riskIcon,
      title: "Corporate Risk Solutions",
      services: [
        "Directors & Officers (D&O) Liability",
        "Business Interruption Cover",
        "Trade Credit Insurance",
        "Employee Group Benefits"
      ],
      linkTo: "/services/corporate-risk"
    },
    {
      icon: globalIcon,
      title: "Specialized Global Covers",
      services: [
        "Political Risk Insurance",
        "Reinsurance Placement",
        "Multinational Program Structuring",
        "Cross-border Infrastructure Insurance"
      ],
      linkTo: "/services/global-programs"
    }
  ];

  return (
    <section className={styles.keyOfferingsSection}>
      <div className={styles.backgroundPattern}>
        <div className={styles.patternCircle}></div>
        <div className={styles.patternCircle}></div>
        <div className={styles.patternCircle}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>Our Services</div>
          <h2 className={styles.title}>Our Key Offerings</h2>
          <p className={styles.description}>
            Comprehensive insurance and bond solutions tailored to your business needs, 
            delivered with expertise and innovation.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              services={service.services}
              linkTo={service.linkTo}
            />
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <Link to="/services" className={styles.exploreButton}>
            <span className={styles.buttonText}>Explore All Services</span>
            <span className={styles.buttonIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.8333 10H4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyOfferings;