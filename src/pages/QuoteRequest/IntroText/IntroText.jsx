import React, { useState, useEffect, useRef } from 'react';
import { Star, Award, Users } from 'lucide-react';
import styles from './IntroText.module.css';

const IntroText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={styles.intro}
    >
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Main Content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Insurance Solutions Tailored for You
            </h2>
            <p className={styles.description}>
              At <span className={styles.brandName}>Surety Limited</span>, we believe every client deserves insurance solutions that fit their unique requirements. Complete the form below, and our experts will reach out with a customized proposal at the best global rates.
            </p>
          </div>

          {/* Stats Cards */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.statCard1}`}>
              <div className={styles.statIcon}>
                <Star className={styles.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>4.9/5</div>
                <div className={styles.statLabel}>Client Rating</div>
              </div>
            </div>

            <div className={`${styles.statCard} ${styles.statCard2}`}>
              <div className={styles.statIcon}>
                <Users className={styles.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>10,000+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
            </div>

            <div className={`${styles.statCard} ${styles.statCard3}`}>
              <div className={styles.statIcon}>
                <Award className={styles.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustSection}>
            <div className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <div className={styles.trustIcon}>🛡️</div>
                <span>Fully Licensed</span>
              </div>
              <div className={styles.trustBadge}>
                <div className={styles.trustIcon}>⚡</div>
                <span>24h Response</span>
              </div>
              <div className={styles.trustBadge}>
                <div className={styles.trustIcon}>🌍</div>
                <span>Global Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className={styles.backgroundDecoration}>
          <div className={styles.decorativeShape1}></div>
          <div className={styles.decorativeShape2}></div>
        </div>
      </div>
    </section>
  );
};

export default IntroText;