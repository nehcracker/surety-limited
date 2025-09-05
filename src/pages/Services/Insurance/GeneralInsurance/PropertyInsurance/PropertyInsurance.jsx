import React, { useState } from 'react';
import styles from './PropertyInsurance.module.css';

const PropertyInsurance = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Residential Cover",
      description: "Insurance for your home and belongings, protecting against fire, burglary, and accidental damage.",
      icon: "🏠",
      features: ["Fire Protection", "Burglary Coverage", "Accidental Damage", "Contents Insurance"]
    },
    {
      id: 2,
      title: "Commercial Property",
      description: "Tailored protection for offices, warehouses, and factories against operational risks.",
      icon: "🏢",
      features: ["Business Premises", "Equipment Coverage", "Loss of Income", "Public Liability"]
    },
    {
      id: 3,
      title: "Industrial Equipment",
      description: "Specialized cover for machinery, tools, and other assets critical to your operations.",
      icon: "⚙️",
      features: ["Machinery Coverage", "Breakdown Protection", "Replacement Cost", "Business Interruption"]
    }
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <section className={styles.section} id="property-insurance">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Property Insurance</h2>
          <p className={styles.description}>
            Protecting your property is essential to securing your future. Our property insurance covers 
            residential, commercial, and industrial spaces against risks such as fire, theft, and natural disasters.
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`${styles.card} ${selectedCard === card.id ? styles.active : ''}`}
              onClick={() => handleCardClick(card.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(card.id)}
              aria-expanded={selectedCard === card.id}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              
              <p className={styles.cardDescription}>{card.description}</p>
              
              <div className={`${styles.cardDetails} ${selectedCard === card.id ? styles.expanded : ''}`}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {card.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={styles.learnMoreBtn} aria-label={`Learn more about ${card.title}`}>
                  Get Quote
                </button>
              </div>
              
              <div className={styles.cardFooter}>
                <span className={styles.expandText}>
                  {selectedCard === card.id ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyInsurance;