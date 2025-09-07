import React from 'react';
import styles from './ClientSatisfaction.module.css';

const ClientSatisfaction = () => {
  const guarantees = [
    {
      title: "Transparent Terms",
      description: "No hidden conditions – everything is clear and upfront.",
      icon: "📋"
    },
    {
      title: "Defined Timelines",
      description: "Bonds issued within agreed turnaround schedules.",
      icon: "⏰"
    },
    {
      title: "Compliance Support",
      description: "Guidance to ensure ongoing adherence to bond obligations.",
      icon: "✅"
    }
  ];

  return (
    <section className={styles.clientSatisfactionSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Client Satisfaction Guarantee</h2>
          <p className={styles.subheading}>
            We guarantee transparency, reliability, and timely delivery of Performance Bonds. 
            Every client engagement is backed by clear communication and measurable results.
          </p>
        </div>
        <div className={styles.guaranteesWrapper}>
          <div className={styles.guaranteesGrid}>
            {guarantees.map((guarantee, index) => (
              <div key={index} className={styles.guaranteeCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div className={styles.guaranteeIcon}>
                      {guarantee.icon}
                    </div>
                    <h3 className={styles.guaranteeTitle}>{guarantee.title}</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p className={styles.guaranteeDescription}>{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.satisfactionBadge}>
            <div className={styles.badgeContent}>
              <div className={styles.badgeIcon}>⭐</div>
              <div className={styles.badgeText}>
                <span className={styles.badgeTitle}>100%</span>
                <span className={styles.badgeSubtitle}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;