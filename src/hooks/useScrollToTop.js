import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls the window to the hero section when the pathname changes
 * Useful for page transitions in a single-page application
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
      // Try to find a hero section element
      const heroSection = document.querySelector('.heroSection') ||
                          document.querySelector('[class*="hero"]') ||
                          document.querySelector('[class*="Hero"]');
      
      if (heroSection) {
        // Get the header height to account for fixed positioning
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Calculate the position to scroll to (hero section position minus header height)
        const heroPosition = heroSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Scroll to the hero section with smooth animation
        window.scrollTo({
          top: heroPosition,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback to top of page if no hero section is found
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      
      // Focus on the main content for accessibility
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    }, 100); // Small delay to ensure components are rendered
  }, [pathname]);
  
  return null;
};

export default useScrollToTop;