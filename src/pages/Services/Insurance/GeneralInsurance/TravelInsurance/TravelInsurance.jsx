import React, { useState, useRef, useEffect } from 'react';
import styles from './TravelInsurance.module.css';

const TravelInsurance = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  const cards = [
    {
      id: 1,
      title: "Medical Emergency Cover",
      description: "Financial protection for unexpected hospital stays or treatments abroad.",
      icon: "🏥",
      features: [
        "Emergency Medical Treatment",
        "Hospital Accommodation", 
        "Medical Evacuation",
        "Repatriation Coverage"
      ],
      coverage: "Up to $1,000,000",
      destinations: "Worldwide",
      color: "red"
    },
    {
      id: 2,
      title: "Trip Cancellation & Delay",
      description: "Compensation for delays, missed flights, or sudden trip cancellations.",
      icon: "✈️",
      features: [
        "Trip Cancellation",
        "Flight Delays", 
        "Missed Connections",
        "Additional Accommodation"
      ],
      coverage: "Up to $50,000",
      destinations: "Global",
      color: "blue"
    },
    {
      id: 3,
      title: "Lost Luggage & Belongings", 
      description: "Coverage for baggage, documents, or valuables lost in transit.",
      icon: "🧳",
      features: [
        "Lost Baggage",
        "Delayed Luggage",
        "Personal Items",
        "Travel Documents"
      ],
      coverage: "Up to $25,000",
      destinations: "International",
      color: "green"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorScheme = (color) => {
    const schemes = {
      red: {
        primary: '#ef4444',
        secondary: '#fef2f2',
        accent: '#dc2626'
      },
      blue: {
        primary: '#3b82f6',
        secondary: '#eff6ff', 
        accent: '#2563eb'
      },
      green: {
        primary: '#10b981',
        secondary: '#f0fdfa',
        accent: '#059669'
      }
    };
    return schemes[color];
  };

  return (
    <section ref={sectionRef} className={styles.section} id="travel-insurance">
      <div className={styles.container}>
        <div className={`${styles.header} ${inView ? styles.fadeIn : ''}`}>
          <h2 className={styles.title}>Travel Insurance</h2>
          <p className={styles.description}>
            Whether for business or leisure, travel insurance helps you stay protected during trips. 
            We provide flexible policies that cover medical emergencies, cancellations, and disruptions worldwide.
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>190+</div>
              <div className={styles.statLabel}>Countries Covered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Emergency Assistance</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Claim Satisfaction</div>
            </div>
          </div>
        </div>

        <div className={`${styles.cardsContainer} ${inView ? styles.cardsVisible : ''}`}>
          {cards.map((card, index) => {
            const colorScheme = getColorScheme(card.color);
            return (
              <div
                key={card.id}
                className={`${styles.card} ${hoveredCard === card.id ? styles.hovered : ''}`}
                style={{ 
                  '--primary-color': colorScheme.primary,
                  '--secondary-color': colorScheme.secondary,
                  '--accent-color': colorScheme.accent,
                  '--animation-delay': `${index * 0.2}s`
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.cardBackground}>
                  <div className={styles.cardGradient}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconContainer}>
                      <span className={styles.cardIcon}>{card.icon}</span>
                      <div className={styles.iconGlow}></div>
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  
                  <p className={styles.cardDescription}>{card.description}</p>
                  
                  <div className={styles.coverageInfo}>
                    <div className={styles.coverageItem}>
                      <span className={styles.coverageLabel}>Coverage:</span>
                      <span className={styles.coverageValue}>{card.coverage}</span>
                    </div>
                    <div className={styles.coverageItem}>
                      <span className={styles.coverageLabel}>Destinations:</span>
                      <span className={styles.coverageValue}>{card.destinations}</span>
                    </div>
                  </div>
                  
                  <div className={styles.featuresSection}>
                    <h4 className={styles.featuresTitle}>What's Included:</h4>
                    <ul className={styles.featuresList}>
                      {card.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureCheck}>✓</span>
                          <span className={styles.featureText}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.cardActions}>
                    <button className={styles.primaryBtn} aria-label={`Get quote for ${card.title}`}>
                      Get Instant Quote
                    </button>
                    <button className={styles.secondaryBtn} aria-label={`Compare ${card.title} plans`}>
                      Compare Plans
                    </button>
                  </div>
                </div>
                
                <div className={styles.cardDecorations}>
                  <div className={styles.decoration1}></div>
                  <div className={styles.decoration2}></div>
                  <div className={styles.decoration3}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`${styles.bottomSection} ${inView ? styles.fadeIn : ''}`}>
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>🛡️</div>
              <div className={styles.badgeText}>
                <div className={styles.badgeTitle}>Trusted Coverage</div>
                <div className={styles.badgeSubtext}>Licensed & Regulated</div>
              </div>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>⚡</div>
              <div className={styles.badgeText}>
                <div className={styles.badgeTitle}>Instant Policies</div>
                <div className={styles.badgeSubtext}>Coverage in Minutes</div>
              </div>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>💼</div>
              <div className={styles.badgeText}>
                <div className={styles.badgeTitle}>Business & Leisure</div>
                <div className={styles.badgeSubtext}>All Trip Types</div>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Travel with Peace of Mind?</h3>
            <p className={styles.ctaText}>Get a personalized quote in under 2 minutes</p>
            <button className={styles.ctaButton}>Start Your Quote Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInsurance;