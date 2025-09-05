import React from 'react';
import { Building, ArrowRight } from 'lucide-react';
import styles from './CustomsBond.module.css';

const CustomsBond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Smooth Customs Clearance</h3>
              <p className={styles.cardDescription}>Ensure compliance and reduce delays at borders</p>
              <button className={styles.ctaButton}>
                <span>Get Started</span>
                <ArrowRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <Building className={styles.icon} />
              </div>
              <h2 className={styles.title}>Customs Bonds</h2>
            </div>
            <p className={styles.description}>
              Customs Bonds guarantee compliance with customs regulations during import and export. They protect governments and regulatory authorities from losses due to unpaid duties, taxes, or penalties.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Facilitates smooth import and export processes</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Ensures compliance with customs laws</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Reduces delays at borders and ports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomsBond;