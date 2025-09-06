import React, { useState } from 'react';
import { Title, Meta, Link } from 'react-head';
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
      {/* SEO Head Tags */}
      <Title>Request a Quote | Surety Limited - Insurance & Bonds</Title>
      <Meta
        key="description"
        name="description"
        content="Get a customized insurance or surety bond quote from Surety Limited. Our experts will provide you with the best rates and coverage options tailored to your needs."
      />
      <Meta name="keywords" content="insurance quote, surety bonds, custom quote, insurance services, global coverage, best rates, expert support" />
      <Link rel="canonical" href="https://suretylimited.com/quote-request" />
      
      {/* Open Graph Tags for Social Media */}
      <Meta property="og:title" content="Request a Quote | Surety Limited" />
      <Meta
        key="og:description"
        property="og:description"
        content="Get a customized insurance or surety bond quote from Surety Limited with the best global rates and expert support."
      />
      <Meta property="og:url" content="https://suretylimited.com/quote-request" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://suretylimited.com/og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Request a Quote | Surety Limited" />
      <Meta
        key="twitter:description"
        name="twitter:description"
        content="Get a customized insurance or surety bond quote from Surety Limited with the best global rates and expert support."
      />
      <Meta name="twitter:image" content="https://suretylimited.com/twitter-image.jpg" />
      
      {/* Structured Data for Rich Snippets (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Request a Quote | Surety Limited",
            "description": "Get a customized insurance or surety bond quote from Surety Limited with the best global rates and expert support.",
            "url": "https://suretylimited.com/quote-request",
            "potentialAction": {
              "@type": "RequestQuote",
              "name": "Request Insurance Quote"
            }
          }
        `}
      </script>

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