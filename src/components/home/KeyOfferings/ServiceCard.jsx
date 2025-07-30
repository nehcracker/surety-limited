import React from 'react';
import { Link } from 'react-router-dom';
import styles from './KeyOfferings.module.css';

const ServiceCard = ({ icon, title, services, linkTo }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <img src={icon} alt={title} className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      
      <div className={styles.cardContent}>
        <ul className={styles.servicesList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <span className={styles.checkIcon}>✓</span>
              <span className={styles.serviceText}>{service}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.cardFooter}>
        <Link to={linkTo} className={styles.learnMoreLink}>
          <span className={styles.linkText}>Learn More</span>
          <span className={styles.arrowIcon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 3L13.5 8L8.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 8H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;