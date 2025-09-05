import React, { useState } from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo/Surety-logo.png';

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
            <img src={logo} alt="Surety Limited" />
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