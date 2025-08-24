// services/GlobalPrograms/ProgramCard.jsx
import React from 'react';
import styles from './GlobalPrograms.module.css';

const ProgramCard = ({ title, description }) => {
  return (
    <div className={styles.programCard}>
      <h3 className={styles.programTitle}>{title}</h3>
      <p className={styles.programDescription}>{description}</p>
    </div>
  );
};

export default ProgramCard;