import React, { useState } from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logo}>
            Surety Limited
          </a>
        </div>
        
        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <Navigation isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;