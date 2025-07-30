import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout/Layout';
import AboutHero from '../../components/about/AboutHero/AboutHero';
import WhoWeAre from '../../components/about/WhoWeAre/WhoWeAre';
import GlobalReach from '../../components/about/GlobalReach/GlobalReach';
import MissionVision from '../../components/about/MissionVision/MissionVision';
import CoreValues from '../../components/about/CoreValues/CoreValues';
import Leadership from '../../components/about/Leadership/Leadership';
import Partnership from '../../components/about/Partnership/Partnership';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    // For scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(`.${styles.animatedSection}`);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <Layout>
      <div className={styles.aboutPage}>
        <AboutHero />
        
        <div className={`${styles.animatedSection} ${styles.whoWeAreSection}`}>
          <WhoWeAre />
        </div>
        
        <div className={`${styles.animatedSection} ${styles.globalReachSection}`}>
          <GlobalReach />
        </div>
        
        <div className={`${styles.animatedSection} ${styles.missionVisionSection}`}>
          <MissionVision />
        </div>
        
        <div className={`${styles.animatedSection} ${styles.coreValuesSection}`}>
          <CoreValues />
        </div>
        
        <div className={`${styles.animatedSection} ${styles.leadershipSection}`}>
          <Leadership />
        </div>
        
        <div className={`${styles.animatedSection} ${styles.partnershipSection}`}>
          <Partnership />
        </div>
      </div>
    </Layout>
  );
};

export default About;
