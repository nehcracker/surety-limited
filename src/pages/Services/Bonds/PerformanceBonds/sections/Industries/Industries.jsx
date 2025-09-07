import React from 'react';
import styles from './Industries.module.css';

const Industries = () => {
  const industries = [
    {
      title: "Construction & Infrastructure",
      description: "Covering roads, bridges, and large-scale developments.",
      icon: "🏗️",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)"
    },
    {
      title: "Oil & Gas",
      description: "Supporting upstream, midstream, and downstream projects.",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
    },
    {
      title: "Mining & Energy",
      description: "Ensuring delivery in high-value resource projects.",
      icon: "⛏️",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    },
    {
      title: "Government Contracts",
      description: "Meeting strict compliance and performance standards.",
      icon: "🏛️",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
    },
    {
      title: "International Trade",
      description: "Safeguarding global procurement and supply projects.",
      icon: "🌍",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    }
  ];

  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Industries We Serve</h2>
          <p className={styles.subheading}>
            Our Performance Bonds are trusted across industries where project delivery and compliance are critical.
          </p>
        </div>
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <div 
                className={styles.cardBackground}
                style={{ background: industry.gradient }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.industryIcon}>
                  {industry.icon}
                </div>
                <h3 className={styles.industryTitle}>{industry.title}</h3>
                <p className={styles.industryDescription}>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;