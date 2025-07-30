import React from 'react';
import styles from './IndustriesServed.module.css';
import { Link } from 'react-router-dom';

const IndustryCard = ({ title, imageUrl, description }) => {
  // Generate URL-friendly slug from title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <div className={styles.industryCard}>
      <div 
        className={styles.cardImage} 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <Link to={`/industries/${slug}`} className={styles.cardLink}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
