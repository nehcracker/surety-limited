import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const ContactStrip = () => {
  return (
    <div className={styles.contactStrip}>
      <div className={styles.contactStripContainer}>
        <div className={styles.contactStripContent}>
          <div className={styles.contactStripHeading}>
            <h3>Need help now?</h3>
          </div>
          
          <div className={styles.contactStripInfo}>
            <div className={styles.contactItem}>
              <i className="email-icon"></i>
              <span>
                <strong>Email:</strong> info@suretylimited.com
              </span>
            </div>
            
            <div className={styles.contactItem}>
              <i className="phone-icon"></i>
              <span>
                <strong>Call Us:</strong> +44 203 111 9999
              </span>
            </div>
            
            <div className={styles.contactItem}>
              <i className="globe-icon"></i>
              <span>
                <strong>Serving clients across:</strong> Africa, Europe, Middle East & Asia
              </span>
            </div>
          </div>
          
          <div className={styles.contactStripButtons}>
            <Link to="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
            <Link to="/partner" className={styles.partnerBtn}>
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;