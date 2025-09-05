import React, { useState, useEffect } from 'react';
import styles from './CyberLiabilityInsurance.module.css';

const CyberLiabilityInsurance = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showThreatDemo, setShowThreatDemo] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Data Breach Protection",
      description: "Covers costs of investigation, notification, and recovery after a breach.",
      icon: "🔒",
      features: [
        "Forensic Investigation",
        "Customer Notification",
        "Credit Monitoring Services", 
        "Legal & Regulatory Response",
        "Public Relations Support"
      ],
      riskLevel: "Critical",
      coverage: "Up to $5,000,000",
      premium: "From $2,500/year"
    },
    {
      id: 2,
      title: "Cybercrime Cover",
      description: "Protection against online fraud, ransomware, and identity theft.",
      icon: "🛡️",
      features: [
        "Ransomware Protection",
        "Social Engineering Fraud",
        "Funds Transfer Fraud",
        "Cyberbullying Coverage",
        "Reputation Management"
      ],
      riskLevel: "High",
      coverage: "Up to $10,000,000", 
      premium: "From $3,500/year"
    },
    {
      id: 3,
      title: "Business Interruption",
      description: "Compensation for income loss resulting from cyberattacks or system downtime.",
      icon: "⚡",
      features: [
        "Lost Revenue Coverage",
        "Extra Expense Reimbursement",
        "System Restoration Costs",
        "Dependent Business Coverage",
        "Contingent Interruption"
      ],
      riskLevel: "Medium",
      coverage: "Up to $2,500,000",
      premium: "From $1,800/year"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    // Start threat demo animation
    const timer = setTimeout(() => {
      setShowThreatDemo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const getRiskColor = (level) => {
    const colors = {
      'Critical': '#ef4444',
      'High': '#f59e0b', 
      'Medium': '#10b981'
    };
    return colors[level];
  };

  const threatTypes = [
    { name: "Malware", icon: "🦠", active: false },
    { name: "Phishing", icon: "🎣", active: false },
    { name: "Ransomware", icon: "💀", active: false },
    { name: "DDoS", icon: "⚡", active: false },
    { name: "Data Theft", icon: "🕳️", active: false }
  ];

  const [threats, setThreats] = useState(threatTypes);

  useEffect(() => {
    if (showThreatDemo) {
      const interval = setInterval(() => {
        setThreats(prev => {
          const newThreats = [...prev];
          const randomIndex = Math.floor(Math.random() * newThreats.length);
          newThreats[randomIndex] = {
            ...newThreats[randomIndex],
            active: !newThreats[randomIndex].active
          };
          return newThreats;
        });
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [showThreatDemo]);

  return (
    <section className={styles.section} id="cyber-liability-insurance">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h2 className={styles.title}>Cyber Liability Insurance</h2>
              <p className={styles.description}>
                In a digital world, cyber threats are a growing risk. Our cyber liability insurance 
                protects your business from financial and reputational damage caused by cybercrime, 
                hacking, or data breaches.
              </p>
            </div>
            
            <div className={styles.threatVisualization}>
              <div className={styles.shieldCenter}>
                <div className={styles.shield}>🛡️</div>
                <div className={styles.shieldText}>Protected</div>
              </div>
              <div className={styles.threatsContainer}>
                {threats.map((threat, index) => (
                  <div 
                    key={threat.name}
                    className={`${styles.threat} ${threat.active ? styles.threatActive : ''}`}
                    style={{ 
                      '--angle': `${index * 72}deg`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <span className={styles.threatIcon}>{threat.icon}</span>
                    <span className={styles.threatName}>{threat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <div className={styles.statValue}>$4.45M</div>
            <div className={styles.statLabel}>Average Data Breach Cost</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>287 Days</div>
            <div className={styles.statLabel}>Average Time to Identify</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>95%</div>
            <div className={styles.statLabel}>Breaches Due to Human Error</div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div 
              key={card.id}
              className={`${styles.card} ${selectedCard === card.id ? styles.expanded : ''} ${isVisible ? styles.slideIn : ''}`}
              onClick={() => handleCardClick(card.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardHeaderText}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div 
                    className={styles.riskBadge}
                    style={{ backgroundColor: getRiskColor(card.riskLevel) }}
                  >
                    {card.riskLevel} Risk
                  </div>
                </div>
                <div className={styles.expandIcon}>
                  {selectedCard === card.id ? '−' : '+'}
                </div>
              </div>
              
              <p className={styles.cardDescription}>{card.description}</p>
              
              <div className={styles.cardQuickInfo}>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>Coverage:</span>
                  <span className={styles.quickInfoValue}>{card.coverage}</span>
                </div>
                <div className={styles.quickInfoItem}>
                  <span className={styles.quickInfoLabel}>From:</span>
                  <span className={styles.quickInfoValue}>{card.premium}</span>
                </div>
              </div>
              
              <div className={`${styles.expandedContent} ${selectedCard === card.id ? styles.visible : ''}`}>
                <h4 className={styles.featuresTitle}>Comprehensive Protection Includes:</h4>
                <div className={styles.featuresList}>
                  {card.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <div className={styles.featureIcon}>✓</div>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.cardActions}>
                  <button className={styles.getQuoteBtn}>
                    Get Custom Quote
                  </button>
                  <button className={styles.assessmentBtn}>
                    Free Risk Assessment
                  </button>
                </div>
              </div>
              
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Don't Wait for a Cyber Attack</h3>
            <p className={styles.ctaDescription}>
              Every business is a target. Protect your company with comprehensive cyber insurance 
              that covers the full spectrum of digital risks.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCtaBtn}>
                Get Protected Now
              </button>
              <button className={styles.secondaryCtaBtn}>
                Schedule Consultation
              </button>
            </div>
          </div>
          
          <div className={styles.urgencyIndicator}>
            <div className={styles.urgencyIcon}>⚠️</div>
            <div className={styles.urgencyText}>
              <div className={styles.urgencyTitle}>Cyber attacks occur every 39 seconds</div>
              <div className={styles.urgencySubtext}>Don't become the next victim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberLiabilityInsurance;