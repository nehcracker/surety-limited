// services/GlobalPrograms/GlobalPrograms.jsx
import React from 'react';
import styles from './GlobalPrograms.module.css';
import ProgramCard from './ProgramCard';

const GlobalPrograms = () => {
  const programs = [
    {
      title: 'Political Risk Insurance',
      description: 'Cover against expropriation, currency inconvertibility, and political violence.'
    },
    {
      title: 'Reinsurance Placement',
      description: 'For brokers, insurers, or self-insured firms needing capacity beyond domestic markets.'
    },
    {
      title: 'Multinational Infrastructure Projects',
      description: 'Insurance and bonding solutions tailored for contractors in energy, transport, and construction.'
    },
    {
      title: 'Special Projects & Syndicated Covers',
      description: 'Including PPPs, export-financed deals, and sovereign transactions.'
    }
  ];

  return (
    <section className={styles.globalSection} id="global-programs">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌍</span> Global & Cross-Border Insurance Programs
          </h2>
          <p className={styles.sectionIntro}>
            We help businesses operating across borders structure and place global insurance solutions in alignment with both international and local regulations.
          </p>
        </div>
        
        <div className={styles.programsGrid}>
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
        
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Risk engineering and underwriting support</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Access to Lloyd's markets and top-tier reinsurers</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.checkmark}>✅</span>
            <p>Complete document handling and cross-border advisory</p>
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#global-covers" className={styles.ctaButton}>Inquire About Global Covers →</a>
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;