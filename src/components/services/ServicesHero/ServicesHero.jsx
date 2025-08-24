// services/ServicesHero/ServicesHero.jsx
import React from 'react';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services – Surety Limited</h1>
        <div className={styles.description}>
          <p>
            At Surety Limited, we deliver comprehensive insurance brokerage and bonding solutions 
            designed to meet the diverse needs of businesses, contractors, institutions, and 
            international entities.
          </p>
          <p>
            Whether you're seeking a bid bond for a tender, protection for your marine cargo, or 
            global liability coverage, we ensure that you receive fast, transparent, and competitive 
            solutions backed by A-rated providers and full compliance across jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;