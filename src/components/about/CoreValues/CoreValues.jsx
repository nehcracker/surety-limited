import React, { useEffect, useRef } from 'react';
import ValueCard from './ValueCard';
import styles from './CoreValues.module.css';

const CoreValues = () => {
  const sectionRef = useRef(null);
  
  // Values data
  const values = [
    {
      icon: 'shield-check',
      title: 'Integrity',
      description: 'We deliver what we promise, with full regulatory and ethical compliance.'
    },
    {
      icon: 'users',
      title: 'Client-Focus',
      description: 'Every solution is crafted with the client\'s industry, budget, and risk profile in mind.'
    },
    {
      icon: 'bolt',
      title: 'Efficiency',
      description: 'From application to issuance, we prioritize speed without sacrificing accuracy.'
    },
    {
      icon: 'handshake',
      title: 'Partnership',
      description: 'We work alongside the world\'s leading underwriters and reinsurers to give you the best.'
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className={styles.coreValues} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span className={styles.emoji}>💡</span> Core Values
          </h2>
          <p className={styles.subheading}>
            The principles that guide every decision we make and every solution we deliver
          </p>
        </div>
        
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.backgroundElement}></div>
    </section>
  );
};

export default CoreValues;
