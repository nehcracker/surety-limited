import React, { useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import IntroText from './IntroText/IntroText';
import QuoteForm from './QuoteForm/QuoteForm';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ContactCTA from './ContactCTA/ContactCTA';
import styles from './QuoteRequest.module.css';

const QuoteRequest = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <HeroSection />
      <IntroText />
      <QuoteForm 
        onSubmit={handleFormSubmit} 
        isSubmitted={isFormSubmitted} 
      />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
};

export default QuoteRequest;