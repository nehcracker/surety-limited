import React from 'react';
import { Title, Meta, Link } from 'react-head';
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
      <Title>Surety Limited – Trusted Performance Bond Solutions Worldwide</Title>
      <Meta name="description" content="Tailored performance bonds designed to match your project size, risk, & industry needs. We ensure efficiency, compliance, & peace of mind for every client." />
      <Meta name="keywords" content="Performance Bonds, Bond insurance brokers, Best performance bond rates worldwide, Performance bond services for contractors, Contract bonds, Surety bonds, International surety services, Bid bonds and performance bonds, Advance payment guarantees, Surety, Construction Bonds, bid bond, Insurance, Project Security, Surety Limited" />
      <Meta property="og:title" content="Performance Bonds | Surety Limited" />
      <Meta property="og:description" content="Discover how Performance Bonds protect your projects and ensure contractual obligations are met. Get a quote from Surety Limited today." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://suretylimited.com/services/bonds/performance-bonds" />
      <Meta property="og:image" content="https://suretylimited.com/assets/images/logo/Surety-logo.png" />
      <Link rel="canonical" href="https://suretylimited.com/services/bonds/performance-bonds" />

      {/* SEO Schema.org Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Performance Bonds",
          "provider": {
            "@type": "Organization",
            "name": "Surety Limited",
            "url": "https://suretylimited.com",
            "logo": "https://suretylimited.com/assets/images/logo/Surety-logo.png"
          },
          "description": "Tailored performance bonds designed to match your project size, risk, & industry needs. We ensure efficiency, compliance, & peace of mind for every client.",
          "areaServed": "Worldwide",
          "serviceType": "Performance Bond",
          "url": "https://suretylimited.com/services/bonds/performance-bonds"
        }
        `}
      </script>

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