import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import styles from './FinancialGuarantee.module.css';

const FinancialGuarantee = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Financial Protection</h3>
              <p className={styles.cardDescription}>Enhance access to financing with trusted guarantees</p>
              <button className={styles.ctaButton}>
                <span>Apply Today</span>
                <ArrowRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <TrendingUp className={styles.icon} />
              </div>
              <h2 className={styles.title}>Financial Guarantees</h2>
            </div>
            <p className={styles.description}>
              Financial Guarantees provide security for repayment of loans, leases, or other financial commitments. They protect lenders and investors against default, ensuring obligations are met as agreed.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Enhances access to financing</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Builds trust between lenders and borrowers</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Reduces risks in high-value financial transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialGuarantee;