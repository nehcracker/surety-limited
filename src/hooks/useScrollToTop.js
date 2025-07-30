import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls the window to the top when the pathname changes
 * Useful for page transitions in a single-page application
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to the top of the page with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Focus on the main content for accessibility
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname]);
  
  return null;
};

export default useScrollToTop;