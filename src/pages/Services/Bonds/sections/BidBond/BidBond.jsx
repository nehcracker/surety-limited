import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import styles from './BidBond.module.css';

const BidBond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Secure Your Bid</h3>
              <p className={styles.cardDescription}>Validate your tender with trusted bid bond solutions</p>
              <button className={styles.ctaButton}>
                <span>Get Bid Bond</span>
                <ArrowRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <FileText className={styles.icon} />
              </div>
              <h2 className={styles.title}>Bid Bonds</h2>
            </div>
            <p className={styles.description}>
              Bid Bonds safeguard project owners during the tendering process by ensuring that bidders honor their offers. If the winning bidder fails to sign the contract or provide performance security, the bond covers the owner against financial loss.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Validates a bidder's seriousness and capability</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Reduces risks in tender processes</p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.bulletPoint}></div>
                <p className={styles.benefitText}>Strengthens trust between bidders and clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BidBond;