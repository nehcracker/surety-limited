import React from 'react';
import styles from './WhatIs.module.css';

const WhatIs = () => {
  return (
    <section className={styles.whatIsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>What is a Performance Bond?</h2>
          <p className={styles.description}>
            A Performance Bond is a guarantee that protects project owners against contractor default. 
            If a contractor fails to deliver, the bond ensures the project is completed without financial loss. 
            It's a safeguard for both compliance and trust.
          </p>
        </div>
        <div className={styles.visual}>
          <div className={styles.bondDiagram}>
            <div className={styles.bondElement}>
              <div className={styles.bondIcon}></div>
              <span className={styles.bondLabel}>Project Owner</span>
            </div>
            <div className={styles.bondArrow}></div>
            <div className={styles.bondElement}>
              <div className={styles.bondIcon}></div>
              <span className={styles.bondLabel}>Performance Bond</span>
            </div>
            <div className={styles.bondArrow}></div>
            <div className={styles.bondElement}>
              <div className={styles.bondIcon}></div>
              <span className={styles.bondLabel}>Contractor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;