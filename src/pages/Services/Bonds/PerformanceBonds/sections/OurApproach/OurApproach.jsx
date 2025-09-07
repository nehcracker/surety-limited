import React from 'react';
import styles from './OurApproach.module.css';

const OurApproach = () => {
  const approachSteps = [
    {
      title: "Needs Assessment",
      description: "Review of project details, risks, and contractual obligations.",
      step: "01"
    },
    {
      title: "Tailored Solutions",
      description: "Bond packages designed to match industry standards and project scale.",
      step: "02"
    },
    {
      title: "Fast Issuance",
      description: "Access to top-rated sureties and quick turnaround times.",
      step: "03"
    },
    {
      title: "Ongoing Support",
      description: "Continuous compliance and advisory support throughout your project.",
      step: "04"
    }
  ];

  return (
    <section className={styles.ourApproachSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Approach to Performance Bonds</h2>
          <p className={styles.subheading}>
            We customize every bond to fit your project's size, risks, and industry requirements. 
            Our structured process ensures efficiency, compliance, and complete peace of mind.
          </p>
        </div>
        <div className={styles.stepsGrid}>
          {approachSteps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.step}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < approachSteps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;