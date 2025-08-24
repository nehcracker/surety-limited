// services/SuretyBonds/BondCard.jsx
import React from 'react';
import styles from './SuretyBonds.module.css';

const BondCard = ({ title, description }) => {
  return (
    <div className={styles.bondCard}>
      <h3 className={styles.bondTitle}>{title}</h3>
      <p className={styles.bondDescription}>{description}</p>
    </div>
  );
};

export default BondCard;