import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './PerformanceBond.module.css';

const PerformanceBond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <CheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.title}>Performance Bonds</h2>
            </div>
            <p className={styles.description}>
              Performance Bonds guarantee that a contractor will complete a project according to the agreed terms, quality, and timeframe. In case of default, the bond protects the project owner by covering financial losses or arranging project completion.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Ensures contractual obligations are met</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Protects project owners from delays or non-performance</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Builds credibility for contractors and suppliers</p>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Get Your Performance Bond</h3>
              <p className={styles.cardDescription}>Secure your project with competitive rates and swift processing</p>
              <button className={styles.ctaButton}>
                <Link to="/services/bonds/performance-bonds" className={styles.ctaButtonLink}>
                  <span>Request Quote</span>
                  <ArrowRight className={styles.buttonIcon} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceBond;