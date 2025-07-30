import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import WhoWeAre from '../../components/home/WhoWeAre/WhoWeAre';
import KeyOfferings from '../../components/home/KeyOfferings/KeyOfferings';
import IndustriesServed from '../../components/home/IndustriesServed/IndustriesServed';
import WhyChooseUs from '../../components/home/WhyChooseUs/WhyChooseUs';
import TestimonialCarousel from '../../components/home/ClientTestimonials/TestimonialCarousel';
import InsightsResources from '../../components/home/InsightsResources/InsightsResources';
import RequestQuote from '../../components/home/RequestQuote/RequestQuote';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <WhoWeAre />
      <KeyOfferings />
      <IndustriesServed />
      <WhyChooseUs />
      <TestimonialCarousel />
      <InsightsResources />
      <RequestQuote />
    </div>
  );
};


export default Home;
