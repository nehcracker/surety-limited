import React, { useState } from 'react';
import styles from './WhoWeAre.module.css';

const WhoWeAre = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Handle image loading errors to prevent infinite loading
  const handleImageError = (e) => {
    console.warn('Image failed to load:', e.target.src);
    e.target.style.display = 'none'; // Hide broken image
    // Optionally set a fallback
    // e.target.src = '/assets/images/fallback.jpg';
  };

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };
  
  return (
    <section className={styles.whoWeAreSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.iconWrapper}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </span>
            Who We Are
          </h2>
        </div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              Surety Limited is a licensed and internationally trusted insurance brokerage and bond consultancy firm.
            </p>
            
            <p>
              With a strong presence across global markets, we specialize in delivering customized surety bonds, 
              insurance covers, and risk advisory services to individuals, businesses, and institutions.
            </p>
            
            <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
              <p>
                Built on trust, speed, and precision, our firm connects clients with A-rated insurers and surety providers, 
                ensuring coverage that aligns with regulatory standards and international best practices.
              </p>
              
              <p>
                From government agencies to multinational contractors, we serve those who demand clarity, 
                compliance, and confidence.
              </p>
            </div>
            
            <button 
              type="button"
              className={styles.expandButton} 
              onClick={toggleExpanded}
              aria-expanded={isExpanded}
              aria-controls="expandable-content"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <span 
                className={`${styles.arrow} ${isExpanded ? styles.up : ''}`}
                aria-hidden="true"
              ></span>
            </button>
          </div>
          
          <div className={styles.imageWrapper}>
            <div className={styles.imageCard}>
              <img 
                src={require('../../../assets/images/about/trust.jpg')} 
                alt="Trust - representing our commitment to reliability and integrity" 
                className={styles.image}
                onError={handleImageError}
                loading="lazy"
              />
              <div className={styles.cardOverlay}>
                <span>Trust</span>
              </div>
            </div>
            <div className={styles.imageCard}>
              <img 
                src={require('../../../assets/images/about/speed.jpg')} 
                alt="Speed - representing our efficient service delivery" 
                className={styles.image}
                onError={handleImageError}
                loading="lazy"
              />
              <div className={styles.cardOverlay}>
                <span>Speed</span>
              </div>
            </div>
            <div className={styles.imageCard}>
              <img 
                src={require('../../../assets/images/about/precision.jpg')} 
                alt="Precision - representing our attention to detail and accuracy" 
                className={styles.image}
                onError={handleImageError}
                loading="lazy"
              />
              <div className={styles.cardOverlay}>
                <span>Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;