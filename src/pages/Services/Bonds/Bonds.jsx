import React from 'react';
import { Title, Meta, Link } from 'react-head';
import { Shield, CheckCircle, TrendingUp } from 'lucide-react';
import styles from './Bonds.module.css';
import PerformanceBond from './sections/PerformanceBond/PerformanceBond';
import BidBond from './sections/BidBond/BidBond';
import AdvancePaymentBond from './sections/AdvancePaymentBond/AdvancePaymentBond';
import CustomsBond from './sections/CustomsBond/CustomsBond';
import CourtBond from './sections/CourtBond/CourtBond';
import FinancialGuarantee from './sections/FinancialGuarantee/FinancialGuarantee';


const Bonds = () => {
  return (
    <div className={styles.bondsContainer}>
      {/* SEO Head Tags */}
      <Title>Surety & Bonds | Performance, Bid & Financial Guarantee Solutions</Title>
      <Meta
        key="description"
        name="description"
        content="Comprehensive surety and bond solutions from Surety Limited. We offer performance bonds, bid bonds, advance payment bonds, customs bonds, court bonds, and financial guarantees at competitive rates."
      />
      <Meta
        name="keywords"
        content="surety bonds, performance bond, bid bond, advance payment bond, customs bond, court bond, financial guarantee, surety solutions, bond services, contract bonds, commercial bonds"
      />
      <Link rel="canonical" href="https://suretylimited.com/services/bonds" />
      
      {/* Open Graph Tags for Social Media */}
      <Meta property="og:title" content="Surety & Bonds | Performance, Bid & Financial Guarantee Solutions" />
      <Meta
        key="og:description"
        property="og:description"
        content="Comprehensive surety and bond solutions from Surety Limited. We offer performance bonds, bid bonds, advance payment bonds, customs bonds, court bonds, and financial guarantees at competitive rates."
      />
      <Meta property="og:url" content="https://suretylimited.com/services/bonds" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://suretylimited.com/bonds-og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Surety & Bonds | Performance, Bid & Financial Guarantee Solutions" />
      <Meta
        key="twitter:description"
        name="twitter:description"
        content="Comprehensive surety and bond solutions from Surety Limited. We offer performance bonds, bid bonds, advance payment bonds, customs bonds, court bonds, and financial guarantees at competitive rates."
      />
      <Meta name="twitter:image" content="https://suretylimited.com/bonds-twitter-image.jpg" />
      
      {/* Structured Data for Rich Snippets (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Surety & Bond Solutions",
            "description": "Comprehensive surety and bond solutions designed to protect businesses, contractors, and individuals in high-value transactions.",
            "brand": {
              "@type": "Brand",
              "name": "Surety Limited"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "highPrice": "1000000.00",
              "lowPrice": "1000.00",
              "offerCount": "6",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Performance Bonds",
                  "description": "Guarantees that a contractor will complete a project according to contract terms"
                },
                {
                  "@type": "Offer",
                  "name": "Bid Bonds",
                  "description": "Guarantees that a contractor will honor their bid and enter into the contract if awarded"
                },
                {
                  "@type": "Offer",
                  "name": "Advance Payment Bonds",
                  "description": "Protects advance payments made to contractors before work begins"
                },
                {
                  "@type": "Offer",
                  "name": "Customs Bonds",
                  "description": "Guarantees payment of import duties and taxes to customs authorities"
                },
                {
                  "@type": "Offer",
                  "name": "Court Bonds",
                  "description": "Provides financial security in legal proceedings"
                },
                {
                  "@type": "Offer",
                  "name": "Financial Guarantees",
                  "description": "Ensures financial obligations are met in commercial transactions"
                }
              ]
            }
          }
        `}
      </script>

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

      {/* Bond Sections */}
      <PerformanceBond />
      <BidBond />
      <AdvancePaymentBond />
      <CustomsBond />
      <CourtBond />
      <FinancialGuarantee />
      

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