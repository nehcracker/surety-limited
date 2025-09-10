import React from 'react';
import { Title, Meta, Link } from 'react-head';
import ServicesHero from '../../components/services/ServicesHero/ServicesHero';
import SuretyBonds from '../../components/services/SuretyBonds/SuretyBonds';
import GeneralInsurance from '../../components/services/GeneralInsurance/GeneralInsurance';
import CorporateRisk from '../../components/services/CorporateRisk/CorporateRisk';
import GlobalPrograms from '../../components/services/GlobalPrograms/GlobalPrograms';
import ServiceCTA from '../../components/services/ServiceCTA/ServiceCTA';

function Services() {
  return (
    <div>
      {/* SEO Head Tags */}
      <Title>Services | Surety Limited - Bonds & Insurance Solutions</Title>
      <Meta
        key="description"
        name="description"
        content="Comprehensive surety bonds and insurance services from Surety Limited. Performance bonds, general insurance, corporate risk solutions with global coverage and competitive rates."
      />
      <Meta
        name="keywords"
        content="surety bonds, general insurance, performance bonds, bid bonds, financial guarantees, corporate risk solutions, global insurance programs, trade credit insurance, marine insurance"
      />
      <Link rel="canonical" href="https://suretylimited.com/services" />
      
      {/* Open Graph Tags for Social Media */}
      <Meta property="og:title" content="Services | Surety Limited - Comprehensive Bonds & Insurance Solutions" />
      <Meta
        key="og:description"
        property="og:description"
        content="Explore Surety Limited's comprehensive range of surety bonds and insurance services including performance bonds, general insurance, and corporate risk solutions with global coverage."
      />
      <Meta property="og:url" content="https://suretylimited.com/services" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://suretylimited.com/services-og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Services | Surety Limited - Comprehensive Bonds & Insurance Solutions" />
      <Meta
        key="twitter:description"
        name="twitter:description"
        content="Explore Surety Limited's comprehensive range of surety bonds and insurance services including performance bonds, general insurance, and corporate risk solutions with global coverage."
      />
      <Meta name="twitter:image" content="https://suretylimited.com/services-twitter-image.jpg" />
      
      {/* Structured Data for Rich Snippets (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Insurance and Surety Bond Services",
            "provider": {
              "@type": "Organization",
              "name": "Surety Limited",
              "url": "https://suretylimited.com"
            },
            "areaServed": "Worldwide",
            "description": "Comprehensive surety bonds and insurance services including performance bonds, general insurance, and corporate risk solutions.",
            "offers": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Surety Bonds",
                  "description": "Performance bonds, bid bonds, and financial guarantees"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "General Insurance",
                  "description": "Trade credit, marine, and comprehensive insurance coverage"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Risk Solutions",
                  "description": "Tailored risk management and insurance solutions for corporations"
                }
              }
            ],
            "url": "https://suretylimited.com/services"
          }
        `}
      </script>

      <ServicesHero />
      <SuretyBonds />
      <GeneralInsurance />
      <CorporateRisk />
      <GlobalPrograms />
      <ServiceCTA />
    </div>
  );
}

export default Services;