import React, { useState, useEffect } from 'react';
import styles from './MarineAviationInsurance.module.css';

const MarineAviationInsurance = () => {
  const [activeTab, setActiveTab] = useState('marine');
  const [animatedCards, setAnimatedCards] = useState([]);

  const marineCards = [
    {
      id: 1,
      title: "Cargo Insurance",
      description: "Coverage for goods in transit by sea, air, or inland waterways.",
      icon: "📦",
      features: ["All Risk Coverage", "Institute Cargo Clauses", "War & Strike Cover", "Delay Coverage"],
      highlight: "Global Coverage"
    },
    {
      id: 2,
      title: "Hull & Machinery Cover",
      description: "Protection for ships, aircraft, and operational equipment against damage and breakdowns.",
      icon: "🚢",
      features: ["Hull Damage", "Machinery Breakdown", "Port Risk Cover", "General Average"],
      highlight: "24/7 Support"
    },
    {
      id: 3,
      title: "Liability Cover",
      description: "Safeguards against legal and financial claims arising from operations.",
      icon: "⚖️",
      features: ["Third Party Liability", "Pollution Cover", "Crew Liability", "Collision Liability"],
      highlight: "Legal Protection"
    }
  ];

  const aviationCards = [
    {
      id: 1,
      title: "Aircraft Hull Insurance",
      description: "Physical damage coverage for aircraft including ground risks and flight operations.",
      icon: "✈️",
      features: ["Physical Damage", "Ground Risk", "In-Flight Cover", "War Risk"],
      highlight: "Worldwide Cover"
    },
    {
      id: 2,
      title: "Aviation Liability",
      description: "Protection against passenger, third-party, and product liability claims.",
      icon: "🛡️",
      features: ["Passenger Liability", "Third Party Cover", "Product Liability", "Hangarkeepers"],
      highlight: "Up to $1B Coverage"
    },
    {
      id: 3,
      title: "Cargo & Equipment",
      description: "Coverage for aviation cargo and specialized equipment during transport.",
      icon: "📋",
      features: ["Cargo Protection", "Equipment Cover", "Transit Insurance", "Loading/Unloading"],
      highlight: "Specialized Cover"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards([1, 2, 3]);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentCards = activeTab === 'marine' ? marineCards : aviationCards;

  return (
    <section className={styles.section} id="marine-aviation-insurance">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Marine & Aviation Insurance</h2>
          <p className={styles.description}>
            Trade and transport come with risks. Our marine and aviation insurance ensures 
            your cargo, ships, and aircraft are protected, reducing financial exposure 
            in case of accidents, loss, or damage.
          </p>
          
          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tab} ${activeTab === 'marine' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('marine')}
              aria-pressed={activeTab === 'marine'}
            >
              <span className={styles.tabIcon}>🌊</span>
              Marine Insurance
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'aviation' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('aviation')}
              aria-pressed={activeTab === 'aviation'}
            >
              <span className={styles.tabIcon}>✈️</span>
              Aviation Insurance
            </button>
          </div>
        </div>

        <div className={styles.cardsWrapper}>
          <div className={styles.cardsGrid}>
            {currentCards.map((card, index) => (
              <div 
                key={`${activeTab}-${card.id}`}
                className={`${styles.card} ${animatedCards.includes(card.id) ? styles.animated : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.cardIcon}>{card.icon}</span>
                    <div className={styles.highlight}>{card.highlight}</div>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                
                <p className={styles.cardDescription}>{card.description}</p>
                
                <div className={styles.featuresContainer}>
                  <h4 className={styles.featuresTitle}>Key Features</h4>
                  <div className={styles.featuresGrid}>
                    {card.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <span className={styles.featureIcon}>•</span>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <button className={styles.quoteBtn} aria-label={`Get quote for ${card.title}`}>
                    Get Quote
                  </button>
                  <button className={styles.infoBtn} aria-label={`More info about ${card.title}`}>
                    More Info
                  </button>
                </div>
                
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>Why Choose Our Coverage?</h3>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🌍</div>
              <h4 className={styles.benefitTitle}>Global Network</h4>
              <p className={styles.benefitText}>Worldwide coverage with local expertise</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>⚡</div>
              <h4 className={styles.benefitTitle}>Fast Claims</h4>
              <p className={styles.benefitText}>24/7 claims handling and rapid settlement</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🎯</div>
              <h4 className={styles.benefitTitle}>Specialized Expertise</h4>
              <p className={styles.benefitText}>Industry-specific knowledge and solutions</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>💼</div>
              <h4 className={styles.benefitTitle}>Risk Management</h4>
              <p className={styles.benefitText}>Proactive risk assessment and mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineAviationInsurance;