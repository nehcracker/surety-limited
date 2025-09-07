import React from 'react';
import HeroSection from './sections/HeroSection/HeroSection';
import WhatIs from './sections/WhatIs/WhatIs';
import WhyYouNeed from './sections/WhyYouNeed/WhyYouNeed';
import OurApproach from './sections/OurApproach/OurApproach';
import Benefits from './sections/Benefits/Benefits';
import Industries from './sections/Industries/Industries';
import ClientSatisfaction from './sections/ClientSatisfaction/ClientSatisfaction';
import CTA from './sections/CTA/CTA';
import styles from './PerformanceBonds.module.css';

const PerformanceBonds = () => {
  return (
    <div className={styles.performanceBonds}>
      <HeroSection />
      <WhatIs />
      <WhyYouNeed />
      <OurApproach />
      <Benefits />
      <Industries />
      <ClientSatisfaction />
      <CTA />
    </div>
  );
};

export default PerformanceBonds;