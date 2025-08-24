// services/GeneralInsurance/InsuranceCard.jsx
import React from 'react';
import styles from './GeneralInsurance.module.css';

const InsuranceCard = ({ title, description }) => {
  return (
    <div className={styles.insuranceCard}>
      <h3 className={styles.insuranceTitle}>{title}</h3>
      <p className={styles.insuranceDescription}>{description}</p>
    </div>
  );
};

export default InsuranceCard;