import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const benefits = [
    {
      title: "Top-Tier Sureties",
      description: "Partnering with leading global sureties and underwriters.",
      icon: "🏆"
    },
    {
      title: "Competitive Pricing",
      description: "Flexible and cost-effective bond structures.",
      icon: "💰"
    },
    {
      title: "Expert Knowledge",
      description: "Strong experience across multiple industries and global markets.",
      icon: "🎓"
    },
    {
      title: "Quick Processing",
      description: "Fast issuance to keep your projects moving.",
      icon: "⚡"
    },
    {
      title: "Dedicated Support",
      description: "A client-first approach from start to completion.",
      icon: "🤝"
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Key Benefits of Working With Us</h2>
          <p className={styles.subheading}>
            We offer more than just a bond. We provide confidence, security, and ongoing partnership 
            for successful project delivery.
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{benefit.icon}</span>
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              </div>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;