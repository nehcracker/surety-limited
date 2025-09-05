import React, { useState } from 'react';
import styles from './MotorInsurance.module.css';

const MotorInsurance = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Private Vehicle Cover",
      description: "Affordable protection for personal cars against accidents, theft, and damage.",
      icon: "🚗",
      benefits: ["Comprehensive Coverage", "Third Party Protection", "Personal Accident Cover", "24/7 Roadside Assistance"],
      coverage: "Up to $500,000",
      premium: "From $299/year"
    },
    {
      id: 2,
      title: "Commercial Fleet Insurance",
      description: "Comprehensive cover for trucks, taxis, and company vehicles to keep your business moving.",
      icon: "🚛",
      benefits: ["Fleet Management", "Driver Protection", "Cargo Coverage", "Business Use Cover"],
      coverage: "Up to $2,000,000",
      premium: "Custom Quote"
    },
    {
      id: 3,
      title: "Third-Party Liability",
      description: "Compliance-driven protection that covers damage to third-party property and injury claims.",
      icon: "⚖️",
      benefits: ["Legal Compliance", "Property Damage", "Bodily Injury Cover", "Legal Defense"],
      coverage: "Up to $1,000,000",
      premium: "From $199/year"
    }
  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const openModal = (cardId) => {
    setShowModal(cardId);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <section className={styles.section} id="motor-insurance">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Motor Insurance</h2>
          <p className={styles.subtitle}>Private & Commercial</p>
          <p className={styles.description}>
            We provide flexible motor insurance for both personal and business vehicles. 
            Whether you drive a car, manage a fleet, or run commercial transport, 
            we ensure you stay protected on the road.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${hoveredCard === card.id ? styles.hovered : ''}`}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.iconContainer}>
                    <span className={styles.icon}>{card.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <div className={styles.quickInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.label}>Coverage:</span>
                      <span className={styles.value}>{card.coverage}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.label}>Premium:</span>
                      <span className={styles.value}>{card.premium}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardBack}>
                  <h4 className={styles.benefitsTitle}>Key Benefits</h4>
                  <ul className={styles.benefitsList}>
                    {card.benefits.map((benefit, index) => (
                      <li key={index} className={styles.benefitItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={styles.detailsBtn}
                    onClick={() => openModal(card.id)}
                    aria-label={`View details for ${card.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
                ×
              </button>
              {cards.find(card => card.id === showModal) && (
                <>
                  <div className={styles.modalHeader}>
                    <span className={styles.modalIcon}>
                      {cards.find(card => card.id === showModal).icon}
                    </span>
                    <h3 className={styles.modalTitle}>
                      {cards.find(card => card.id === showModal).title}
                    </h3>
                  </div>
                  <div className={styles.modalBody}>
                    <p className={styles.modalDescription}>
                      {cards.find(card => card.id === showModal).description}
                    </p>
                    <div className={styles.modalInfo}>
                      <div className={styles.modalInfoItem}>
                        <strong>Coverage Amount:</strong> {cards.find(card => card.id === showModal).coverage}
                      </div>
                      <div className={styles.modalInfoItem}>
                        <strong>Premium:</strong> {cards.find(card => card.id === showModal).premium}
                      </div>
                    </div>
                    <h4 className={styles.modalBenefitsTitle}>Complete Benefits Package</h4>
                    <ul className={styles.modalBenefitsList}>
                      {cards.find(card => card.id === showModal).benefits.map((benefit, index) => (
                        <li key={index} className={styles.modalBenefitItem}>
                          <span className={styles.modalCheckIcon}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.modalActions}>
                      <button className={styles.getQuoteBtn}>Get Free Quote</button>
                      <button className={styles.contactBtn}>Contact Agent</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MotorInsurance;