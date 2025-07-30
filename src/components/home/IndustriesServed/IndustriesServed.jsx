import React from 'react';
import styles from './IndustriesServed.module.css';
import IndustryCard from './IndustryCard';
import { Link } from 'react-router-dom';
import industriesData from '../../../data/industriesData';

const IndustriesServed = () => {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.iconWrapper}>💼</span> Industries We Serve
          </h2>
        </div>
        
        <div className={styles.industriesGrid}>
          {industriesData.map((industry) => (
            <IndustryCard 
              key={industry.id}
              title={industry.name}
              imageUrl={industry.image}
              description={industry.description}
            />
          ))}
        </div>
        
        <div className={styles.sectionFooter}>
          <p className={styles.customizationNote}>
            Each solution is customized to your industry-specific risks, obligations, and jurisdiction.
          </p>
          <Link to="/industries" className={styles.industryLink}>
            Industry Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
