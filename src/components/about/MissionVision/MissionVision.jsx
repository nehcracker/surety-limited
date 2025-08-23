// Fixed MissionVision.jsx - Simplified observers and removed problematic code
import React, { useEffect, useRef } from 'react';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  const sectionRef = useRef(null);
  
  // Simplified intersection observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    
    // Add cards to observer
    const cards = section.querySelectorAll(`.${styles.card}, .${styles.statement}`);
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add(styles.cardVisible);
      }, index * 150);
    });

    return () => observer.disconnect();
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
            tabIndex={0}
            aria-labelledby="mission-title"
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
            tabIndex={0}
            aria-labelledby="vision-title"
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
        
        <aside className={styles.statement}>
          <blockquote>
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