import React from 'react';
import { Title, Meta, Link } from 'react-head';
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
      {/* SEO Head Tags */}
      <Title>About Surety Limited | global insurance | insurance company</Title>
      <Meta
        key="description"
        name="description"
        content="A licensed and internationally trusted insurance brokerage and bond consultancy firm with a global presence serving clients worldwide."
      />
      <Meta
        name="keywords"
        content="surety limited, about us, Surety bond, General Liability Insurance, Advance Payment Guarantees, Financial Guarantees, Customs & Tax Bonds, Performance Bond, Bid bond, insurance company, surety bonds, global insurance, leadership team, corporate values, insurance mission, financial expertise"
      />
      <Link rel="canonical" href="https://suretylimited.com/about" />
      
      {/* Open Graph Tags for Social Media */}
      <Meta property="og:title" content="About Surety Limited | Our Mission, Values & Global Expertise" />
      <Meta
        key="og:description"
        property="og:description"
        content="Learn about Surety Limited's global expertise, leadership team, core values, and mission to provide exceptional insurance and surety bond solutions worldwide."
      />
      <Meta property="og:url" content="https://suretylimited.com/about" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://suretylimited.com/about-og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About Surety Limited | Our Mission, Values & Global Expertise" />
      <Meta
        key="twitter:description"
        name="twitter:description"
        content="Learn about Surety Limited's global expertise, leadership team, core values, and mission to provide exceptional insurance and surety bond solutions worldwide."
      />
      <Meta name="twitter:image" content="https://suretylimited.com/about-twitter-image.jpg" />
      
      {/* Structured Data for Rich Snippets (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Surety Limited",
            "url": "https://suretylimited.com",
            "logo": "https://suretylimited.com/logo.png",
            "description": "Global provider of insurance and surety bond solutions with exceptional expertise and service.",
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "17 Hanover Square",
              "addressLocality": "London",
              "postalCode": "W1S 1BN",
              "addressCountry": "United Kingdom"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "email": "info@suretylimited.com",
              "contactType": "customer service"
            }
          }
        `}
      </script>

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
