import React from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import styles from './CourtBond.module.css';

const CourtBond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <Scale className={styles.icon} />
              </div>
              <h2 className={styles.title}>Court Bonds</h2>
            </div>
            <p className={styles.description}>
              Court Bonds provide security in legal proceedings. They ensure that individuals or companies meet their court-ordered obligations, such as payment of damages, costs, or compliance with judgments.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Commonly used in appeals, probate, and fiduciary cases</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Protects the opposing party from financial loss</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Builds confidence in legal compliance</p>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Legal Security</h3>
              <p className={styles.cardDescription}>Ensure compliance with court orders and legal obligations</p>
              <button className={styles.ctaButton}>
                <span>Consult Now</span>
                <ArrowRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtBond;