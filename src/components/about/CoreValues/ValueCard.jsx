import React from 'react';
import styles from './CoreValues.module.css';

// Icon map to make the code cleaner
const iconMap = {
  'shield-check': '🛡️',
  'users': '👥',
  'bolt': '⚡',
  'star': '⭐',
  'handshake': '🤝'
};

const ValueCard = ({ icon, title, description, delay }) => {
  // Apply animation delay style based on prop
  const cardStyle = {
    animationDelay: `${delay}s`,
    transitionDelay: `${delay}s`
  };

  return (
    <div className={styles.valueCard} style={cardStyle}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{iconMap[icon] || '💡'}</span>
      </div>
      
      <h3 className={styles.valueTitle}>{title}</h3>
      
      <p className={styles.valueDescription}>{description}</p>
      
      <div className={styles.hoverEffect}></div>
    </div>
  );
};

// Add these styles to CoreValues.module.css
// Adding them here for reference, but they should be included in the module CSS file


export default ValueCard;
