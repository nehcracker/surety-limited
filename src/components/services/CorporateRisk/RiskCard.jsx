// services/CorporateRisk/RiskCard.jsx
import React from 'react';
import styles from './CorporateRisk.module.css';

const RiskCard = ({ title, description }) => {
  return (
    <div className={styles.riskCard}>
      <h3 className={styles.riskTitle}>{title}</h3>
      <p className={styles.riskDescription}>{description}</p>
    </div>
  );
};

export default RiskCard;