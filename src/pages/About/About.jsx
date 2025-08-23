import React from 'react';
import AboutHero from '../../components/about/AboutHero/AboutHero';
import WhoWeAre from '../../components/about/WhoWeAre/WhoWeAre';
import GlobalReach from '../../components/about/GlobalReach/GlobalReach';
import MissionVision from '../../components/about/MissionVision/MissionVision';
import CoreValues from '../../components/about/CoreValues/CoreValues';
import Leadership from '../../components/about/Leadership/Leadership';
import Partnership from '../../components/about/Partnership/Partnership';

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <GlobalReach />
      <CoreValues />
      <MissionVision />
      <Leadership /> 
      <Partnership />
    </div>
  );
};

export default AboutPage;
