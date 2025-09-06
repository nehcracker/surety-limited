import React from 'react';
import styles from './Header.module.css';

const Navigation = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/services" className={styles.navLink}>Services</a>
        </li>
        <li className={styles.navItem}>
          <a href="/industries" className={styles.navLink}>Industries</a>
        </li>
        <li className={styles.navItem}>
          <a href="/insights" className={styles.navLink}>Insights</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </li>
        <li className={styles.navItem}>
          <a href="/quote-request" className={`${styles.navLink} ${styles.quoteButton}`}>Get a Quote</a>
        </li>
      </ul>
      
      <div className={styles.overlay} onClick={toggleMenu}></div>
    </nav>
  );
};

export default Navigation;