import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import useScrollToTop from '../../../hooks/useScrollToTop';

/**
 * Layout component that wraps all pages with common header and footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 * @returns {React.ReactElement} Layout component
 */
const Layout = ({ children }) => {
  // Hook to scroll to top on page navigation
  useScrollToTop();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;