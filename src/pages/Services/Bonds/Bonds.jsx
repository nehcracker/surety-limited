import React from 'react';
import { Shield, CheckCircle, TrendingUp } from 'lucide-react';
import styles from './Bonds.module.css';
import PerformanceBond from './sections/PerformanceBond/PerformanceBond';
import BidBond from './sections/BidBond/BidBond';
import AdvancePaymentBond from './sections/AdvancePaymentBond/AdvancePaymentBond';


const Bonds = () => {
  return (
    <div className={styles.bondsContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <Shield className={styles.heroIcon} />
              <h1 className={styles.heroTitle}>Surety & Bonds</h1>
            </div>
            <p className={styles.heroSubtitle}>
              Comprehensive surety and bond solutions designed to protect businesses, contractors, and individuals in high-value transactions.
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Shield className={styles.icon} />
                </div>
                <span className={styles.featureText}>Security</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <CheckCircle className={styles.icon} />
                </div>
                <span className={styles.featureText}>Trust</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <TrendingUp className={styles.icon} />
                </div>
                <span className={styles.featureText}>Growth</span>
              </div>
            </div>
            <p className={styles.heroDescription}>
              Our services are structured to provide security, build trust, and ensure smooth execution of projects across industries.
            </p>
          </div>
        </div>
      </section>

      
      <PerformanceBond />
      
      <BidBond />
      <AdvancePaymentBond />
      {/* Bond Sections 
      <CustomsBond />
      <CourtBond />
      <FinancialGuarantee />
      */}

      {/* Closing Statement Section */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingContent}>
            <div className={styles.closingIcon}>
              <Shield className={styles.icon} />
            </div>
            <h2 className={styles.closingTitle}>Your Trusted Bond Partner</h2>
            <p className={styles.closingDescription}>
              At <strong>Surety Limited</strong>, we provide globally competitive surety and bond solutions with the best rates and swift issuance. Whether you are a contractor, importer, exporter, or investor, our bond services safeguard your interests and build lasting trust in every transaction.
            </p>
            <div className={styles.valuePropositions}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <TrendingUp className={styles.icon} />
                </div>
                <h3 className={styles.valueTitle}>Competitive Rates</h3>
                <p className={styles.valueDescription}>Best-in-market pricing for all bond types with transparent terms</p>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <CheckCircle className={styles.icon} />
                </div>
                <h3 className={styles.valueTitle}>Swift Issuance</h3>
                <p className={styles.valueDescription}>Quick processing and bond delivery to meet your deadlines</p>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <Shield className={styles.icon} />
                </div>
                <h3 className={styles.valueTitle}>Global Coverage</h3>
                <p className={styles.valueDescription}>International surety solutions across multiple jurisdictions</p>
              </div>
            </div>
            <button className={styles.ctaButton}>
              Get Your Bond Quote Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bonds;