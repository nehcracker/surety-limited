import React, { useState } from 'react';
import styles from './Leadership.module.css';

const TeamMember = ({ member, delay, isVisible }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  };
  
  const handleMouseEnter = () => {
    setShowDetails(true);
  };
  
  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div 
      className={styles.teamMember} 
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.memberImageContainer}>
        <img 
          src={member.image || '/assets/images/team/placeholder-profile.jpg'} 
          alt={member.name} 
          className={styles.memberImage} 
        />
        <div className={`${styles.memberDetails} ${showDetails ? styles.show : ''}`}>
          <p>{member.bio}</p>
        </div>
      </div>
      
      <div className={styles.memberInfo}>
        <h3>{member.name}</h3>
        <p className={styles.memberPosition}>{member.position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
