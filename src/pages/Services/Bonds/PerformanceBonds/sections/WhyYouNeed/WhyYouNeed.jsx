import React from 'react';
import styles from './WhyYouNeed.module.css';

const WhyYouNeed = () => {
  const reasons = [
    {
      title: "Protects Investments",
      description: "Safeguards project owners from financial loss in case of contractor failure.",
      icon: "🛡️"
    },
    {
      title: "Builds Trust",
      description: "Strengthens relationships between project owners, contractors, and financiers.",
      icon: "🤝"
    },
    {
      title: "Ensures Quality Delivery",
      description: "Guarantees projects are completed on time, within budget, and to required standards.",
      icon: "✅"
    },
    {
      title: "Compliance",
      description: "Meets legal and contractual requirements for large-scale projects.",
      icon: "📋"
    }
  ];

  return (
    <section className={styles.whyYouNeedSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Why You Need a Performance Bond</h2>
        </div>
        <div className={styles.cardsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <span className={styles.emoji}>{reason.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeed;