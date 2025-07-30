import React, { useState } from 'react';
import styles from './Leadership.module.css';
import { motion } from 'framer-motion';

const TeamMember = ({ member }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const memberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={memberVariants}
      className={styles.memberCard}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className={styles.memberImageContainer}>
        <img 
          src={member.image} 
          alt={member.name} 
          className={styles.memberImage} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/images/team/placeholder-profile.jpg';
          }}
        />
        <div className={`${styles.memberOverlay} ${showDetails ? styles.show : ''}`}>
          <div className={styles.memberSocial}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberTitle}>{member.title}</p>
        
        <div className={`${styles.memberDetails} ${showDetails ? styles.show : ''}`}>
          <p className={styles.memberBio}>{member.bio}</p>
          <div className={styles.memberExpertise}>
            <h4>Areas of Expertise:</h4>
            <ul>
              {member.expertise.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
