import React from 'react';
import { Link } from 'react-router-dom';
import ContactStrip from './ContactStrip';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ContactStrip />
      
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>
            <img src="/assets/images/logo/logo.svg" alt="Surety Limited" />
            <p>Your trusted partner in global bonds & insurance brokerage solutions.</p>
          </div>
          
          <div className={styles.footerNav}>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/about#leadership">Leadership</Link></li>
                <li><Link to="/about#global-reach">Global Reach</Link></li>
                <li><Link to="/about#partnership">Partnerships</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <ul>
                <li><Link to="/services#surety-bonds">Surety & Bonds</Link></li>
                <li><Link to="/services#general-insurance">General Insurance</Link></li>
                <li><Link to="/services#corporate-risk">Corporate Risk Solutions</Link></li>
                <li><Link to="/services#global-programs">Global Programs</Link></li>
                <li><Link to="/quote">Get a Quote</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4>Industries</h4>
              <ul>
                <li><Link to="/industries#construction">Construction</Link></li>
                <li><Link to="/industries#energy">Energy & Oil</Link></li>
                <li><Link to="/industries#logistics">Logistics & Maritime</Link></li>
                <li><Link to="/industries#financial">Financial Institutions</Link></li>
                <li><Link to="/industries#public-sector">Public Sector</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <ul>
                <li><Link to="/insights">Insights & Articles</Link></li>
                <li><Link to="/resources#faq">FAQ</Link></li>
                <li><Link to="/resources#glossary">Insurance Glossary</Link></li>
                <li><Link to="/resources#documents">Document Templates</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.copyright}>
              © {currentYear} Surety Limited. All rights reserved.
            </div>
            
            <div className={styles.footerLinks}>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/cookies-policy">Cookies Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
            
            <div className={styles.footerSocial}>
              <a href="https://linkedin.com/company/surety-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="linkedin-icon"></i>
              </a>
              <a href="https://twitter.com/suretylimited" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="twitter-icon"></i>
              </a>
              <a href="https://facebook.com/suretylimited" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="facebook-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;