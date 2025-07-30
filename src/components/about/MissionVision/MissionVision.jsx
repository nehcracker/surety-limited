// src/components/about/MissionVision/MissionVision.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  // Removed unused isVisible state
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);
  
  // Optimized intersection observer
  useEffect(() => {
    const observerOptions = {
      threshold: window.innerWidth < 768 ? 0.05 : 0.1,
      rootMargin: '50px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
      observerOptions
    );
    
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.cardVisible);
              cardsObserver.unobserve(entry.target);
            }, index * 150);
          }
        });
      },
      observerOptions
    );

    const sectionNode = sectionRef.current;
    const cardsNodes = cardsRef.current.filter(Boolean);

    if (sectionNode) {
      observer.observe(sectionNode);
    }

    cardsNodes.forEach(card => {
      if (card) {
        cardsObserver.observe(card);
      }
    });

    return () => {
      observer.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  // Optimized ref callback
  const addToRefs = useCallback((el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  }, []);

  // Touch handlers for better mobile interaction
  const handleTouchStart = useCallback((e) => {
    if (isTouchDevice) {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.transition = 'transform 0.1s ease';
    }
  }, [isTouchDevice]);

  const handleTouchEnd = useCallback((e) => {
    if (isTouchDevice) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.transition = 'transform 0.3s ease';
    }
  }, [isTouchDevice]);

  const handleTouchCancel = useCallback((e) => {
    if (isTouchDevice) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.transition = 'transform 0.3s ease';
    }
  }, [isTouchDevice]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  }, []);

  return (
    <section 
      className={styles.missionVisionSection} 
      ref={sectionRef}
      aria-labelledby="mission-vision-heading"
    >
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="mission-vision-heading">Our Mission & Vision</h2>
          <div className={styles.underline} aria-hidden="true"></div>
          <p>Guiding principles that drive us forward</p>
        </header>
        
        <div className={styles.cards} role="group" aria-label="Mission and Vision Cards">
          <article 
            className={`${styles.card} ${styles.missionCard}`} 
            ref={addToRefs}
            tabIndex={0}
            aria-labelledby="mission-title"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onKeyDown={handleKeyDown}
          >
            <div className={styles.cardIcon} aria-hidden="true">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                role="img"
                aria-label="Mission bookmark icon"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 id="mission-title">Our Mission</h3>
              <p>
                To provide globally competitive, transparent, and tailored insurance and bond solutions that enable our clients to manage risk, access capital, and unlock opportunity.
              </p>
            </div>
            <div className={styles.cardOverlay} aria-hidden="true"></div>
          </article>
          
          <article 
            className={`${styles.card} ${styles.visionCard}`} 
            ref={addToRefs}
            tabIndex={0}
            aria-labelledby="vision-title"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onKeyDown={handleKeyDown}
          >
            <div className={styles.cardIcon} aria-hidden="true">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                role="img"
                aria-label="Vision compass icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16 V12 L16 10"></path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 id="vision-title">Our Vision</h3>
              <p>
                To be the world's most trusted name in surety and insurance brokerage where risk meets reliability.
              </p>
            </div>
            <div className={styles.cardOverlay} aria-hidden="true"></div>
          </article>
        </div>
        
        <aside className={styles.statement} ref={addToRefs}>
          <blockquote cite="Surety Limited Leadership Team">
            <p>
              "We believe in creating financial security and opportunity through innovative risk solutions. Every client we serve becomes stronger, more confident, and better prepared for the future."
            </p>
            <cite>— Leadership Team, Surety Limited</cite>
          </blockquote>
        </aside>
      </div>
    </section>
  );
};

export default MissionVision;