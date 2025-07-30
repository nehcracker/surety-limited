import React, { useState } from 'react';
import TeamMember from './TeamMember';
import styles from './Leadership.module.css';
import { motion } from 'framer-motion';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('leadership');
  
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Chief Executive Officer',
      image: '/assets/images/team/sarah-johnson.jpg',
      bio: 'With over 20 years in the insurance industry, Sarah has led Surety Limited through global expansion and technological transformation.',
      expertise: ['Strategic Leadership', 'Global Markets', 'Regulatory Compliance'],
      linkedin: 'https://linkedin.com/in/sarahjohnson'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Chief Operating Officer',
      image: '/assets/images/team/michael-chen.jpg',
      bio: 'Michael brings 15 years of operational excellence, having previously managed risk portfolios at leading financial institutions across Asia and Europe.',
      expertise: ['Operational Efficiency', 'Risk Management', 'Process Optimization'],
      linkedin: 'https://linkedin.com/in/michaelchen'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      title: 'Head of Underwriting',
      image: '/assets/images/team/elena-rodriguez.jpg',
      bio: 'Elena has underwritten bonds and insurance programs for major infrastructure projects across 3 continents, with special expertise in emerging markets.',
      expertise: ['Complex Underwriting', 'Surety Bonds', 'Credit Analysis'],
      linkedin: 'https://linkedin.com/in/elenarodriguez'
    }
  ];

  const advisoryBoard = [
    {
      id: 5,
      name: 'Dr. Amanda Liu',
      title: 'Insurance Regulation Expert',
      image: '/assets/images/team/amanda-liu.jpg',
      bio: 'Former regulator and policy advisor specializing in international insurance frameworks and compliance standards.',
      expertise: ['Regulatory Policy', 'Compliance', 'Risk Governance'],
      linkedin: 'https://linkedin.com/in/amandaliu'
    },
    {
      id: 6,
      name: 'James Thornton',
      title: 'Construction Industry Specialist',
      image: '/assets/images/team/james-thornton.jpg',
      bio: 'With 25+ years in global construction management, James provides insights on contractor risk needs and surety requirements.',
      expertise: ['Construction Risk', 'Project Management', 'Contractor Requirements'],
      linkedin: 'https://linkedin.com/in/jamesthornton'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Leadership & Team
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.subtitle}
          >
            Our team is made up of seasoned underwriters, licensed brokers, compliance specialists, 
            and claims professionals with decades of experience across insurance, finance, and law.
          </motion.p>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'leadership' ? styles.active : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              Leadership Team
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'advisory' ? styles.active : ''}`}
              onClick={() => setActiveTab('advisory')}
            >
              Advisory Board
            </button>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.teamGrid}
        >
          {activeTab === 'leadership' ? 
            teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            )) : 
            advisoryBoard.map(member => (
              <TeamMember key={member.id} member={member} />
            ))
          }
        </motion.div>

        <div className={styles.achievements}>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.achievementCard}
          >
            <h3>Multi-million-dollar performance guarantees</h3>
            <div className={styles.achievementIcon}>
              <i className="fas fa-chart-line"></i>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.achievementCard}
          >
            <h3>High-risk, cross-border insurance programs</h3>
            <div className={styles.achievementIcon}>
              <i className="fas fa-globe"></i>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.achievementCard}
          >
            <h3>Customized risk solutions for projects in over 20 countries</h3>
            <div className={styles.achievementIcon}>
              <i className="fas fa-shield-alt"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
