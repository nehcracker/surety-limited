import React, { useState, useRef, useEffect } from 'react';
import TeamMember from './TeamMember';
import styles from './Leadership.module.css';

// Sample team data - in a real application, you might import this from your data folder
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in insurance and financial services, Jane leads our global operations with expertise and vision.",
    image: "/assets/images/team/ceo.jpg"
  },
  {
    id: 2,
    name: "John Smith",
    position: "Chief Financial Officer",
    bio: "John brings 15 years of financial leadership experience across international markets, ensuring our fiscal stability and growth.",
    image: "/assets/images/team/cfo.jpg"
  },
  {
    id: 3,
    name: "Michael Wong",
    position: "Head of Underwriting",
    bio: "Michael's deep knowledge of risk assessment and global insurance markets helps us deliver optimal solutions to our clients.",
    image: "/assets/images/team/underwriting.jpg"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Director of Legal Compliance",
    bio: "Sarah ensures all our operations meet the highest standards of regulatory compliance across all jurisdictions.",
    image: "/assets/images/team/legal.jpg"
  }
];

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create intersection observer to detect when section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set isVisible to true once when the element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering to prevent unnecessary callbacks
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Store the current ref value in a variable
    const currentSection = sectionRef.current;

    // Start observing the section element
    if (currentSection) {
      observer.observe(currentSection);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <section className={styles.leadershipSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2>Leadership & Team</h2>
          <p>Our team is made up of seasoned underwriters, licensed brokers, compliance specialists, 
             and claims professionals with decades of experience across insurance, finance, and law.</p>
        </div>
        
        <div className={styles.teamExperience}>
          <p>Together, we've handled:</p>
          <ul className={styles.experienceList}>
            <li>Multi-million-dollar performance guarantees</li>
            <li>High-risk, cross-border insurance programs</li>
            <li>Customized risk solutions for projects in over 20 countries</li>
          </ul>
        </div>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.id}
              member={member}
              delay={index * 0.2} // Staggered animation delay
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
