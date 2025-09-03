import React from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';
import styles from './AdvancePaymentBond.module.css';

const AdvancePaymentBond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <CreditCard className={styles.icon} />
              </div>
              <h2 className={styles.title}>Advance Payment Bonds</h2>
            </div>
            <p className={styles.description}>
              Advance Payment Bonds protect clients who release upfront funds to contractors. The bond ensures that the advance payment is used for the intended project and is recoverable if the contractor fails to fulfill obligations.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Safeguards client's pre-financing</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Encourages responsible use of funds</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Ensures repayment if obligations are not met</p>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Protect Your Investment</h3>
              <p className={styles.cardDescription}>Secure advance payments with comprehensive bond coverage</p>
              <button className={styles.ctaButton}>
                <span>Learn More</span>
                <ArrowRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancePaymentBond;