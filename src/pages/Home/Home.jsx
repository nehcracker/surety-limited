import React from "react";
import { Title, Meta, Link } from "react-head";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import WhoWeAre from "../../components/home/WhoWeAre/WhoWeAre";
import KeyOfferings from "../../components/home/KeyOfferings/KeyOfferings";
import IndustriesServed from "../../components/home/IndustriesServed/IndustriesServed";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import TestimonialCarousel from "../../components/home/ClientTestimonials/TestimonialCarousel";
import InsightsResources from "../../components/home/InsightsResources/InsightsResources";
import RequestQuote from "../../components/home/RequestQuote/RequestQuote";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      {/* SEO Meta Tags */}
      <Title>Surety & Bonds | General Insurance Covers | Corporate Risk Solutions</Title>
      <Meta
        key="description"
        name="description"
        content="Tailored surety and insurance products with unmatched global reach, best-in-class pricing, and full regulatory compliance."
      />
      <Meta name="keywords" content="Surety bond, Political Risk Insurance, Cross-border Infrastructure Insurance, Trade Credit Insurance, Marine & Cargo Insurance, Financial Guarantees, Customs & Court Bonds, performance guarantee, Bank insurance, Advance Payments Guarantee, Bid bonds" />
      <Link rel="canonical" href="https://www.suretylimited.com/" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Surety Limited",
          "url": "https://www.suretylimited.com",
          "logo": "https://www.suretylimited.com/assets/images/logo/Surety-logo.png",
          "description": "Tailored surety and insurance products with unmatched global reach, best-in-class pricing, and full regulatory compliance.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "areaServed": "Worldwide"
          },
          "sameAs": [
            "https://linkedin.com/company/surety-limited",
            "https://twitter.com/suretylimited",
            "https://facebook.com/suretylimited"
          ]
        }
        `}
      </script>

      {/* Page Sections */}
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
