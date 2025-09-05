import React, { useEffect } from 'react';
import { Title, Meta } from 'react-head';
import HeroSection from './HeroSection/HeroSection';
import PropertyInsurance from './PropertyInsurance/PropertyInsurance';
import MotorInsurance from './MotorInsurance/MotorInsurance';
import MarineAviationInsurance from './MarineAviationInsurance/MarineAviationInsurance';
import TravelInsurance from './TravelInsurance/TravelInsurance';
import CyberLiabilityInsurance from './CyberLiabilityInsurance/CyberLiabilityInsurance';
import styles from './GeneralInsurance.module.css';

const GeneralInsurance = () => {
  // Add structured data to the document head
  useEffect(() => {
    // Define structured data inside the useEffect to avoid recreation on every render
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": "Surety Limited - General Insurance Brokerage",
      "description": "Reliable general insurance solutions including property, motor, marine, aviation, travel, and cyber liability insurance.",
      "url": "https://sureytlimited.com/services/insurance",
      "serviceType": [
        "Property Insurance",
        "Motor Insurance",
        "Marine Insurance",
        "Aviation Insurance",
        "Travel Insurance",
        "Cyber Liability Insurance"
      ],
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insurance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Property Insurance",
              "description": "Comprehensive protection for residential, commercial, and industrial properties"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Motor Insurance",
              "description": "Flexible motor insurance for private and commercial vehicles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Travel Insurance",
              "description": "Worldwide travel protection for business and leisure trips"
            }
          }
        ]
      }
    };
    
    // Create script element for structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // Clean up function to remove the script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array since structuredData is now inside the effect
  
  return (
    <>
      <Title>Surety Limited - General Insurance Brokerage | Comprehensive Coverage Solutions</Title>
      <Meta name="description" content="Surety Limited - Leading insurance brokerage providing property, motor, marine, aviation, travel, and cyber liability insurance. Get reliable coverage that fits your needs and budget." />
      <Meta name="keywords" content="insurance brokerage, property insurance, motor insurance, travel insurance, cyber liability, marine insurance, aviation insurance" />
      <Meta property="og:title" content="Surety Limited - General Insurance Brokerage | Comprehensive Coverage Solutions" />
      <Meta property="og:description" content="Reliable general insurance solutions that safeguard what matters most. From property and vehicles to travel and cyber protection." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://sureytlimited.com/services/insurance" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Surety Limited - General Insurance Brokerage | Comprehensive Coverage Solutions" />
      <Meta name="twitter:description" content="Reliable general insurance solutions that safeguard what matters most. From property and vehicles to travel and cyber protection." />
      <Meta name="canonical" href="https://sureytlimited.com/services/insurance" />
      {/* Note: react-head doesn't support script tags directly like react-helmet-async does */}
      
      <main className={styles.container}>
        <HeroSection />
        <PropertyInsurance />
        <MotorInsurance />
        <MarineAviationInsurance />
        <TravelInsurance />
        <CyberLiabilityInsurance />
      </main>
    </>
  );
};

export default GeneralInsurance;