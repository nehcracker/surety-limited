// src/pages/Contact.jsx
import React from "react";
import { Title, Meta, Link } from 'react-head';
import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactFormSection from "../../components/contact/ContactFormSection/ContactFormSection";
import MapLocation from "../../components/contact/MapLocation/MapLocation";
import CallbackScheduler from "../../components/contact/CallbackScheduler/CallbackScheduler";

const Contact = () => {
  return (
    <div>
      {/* SEO Head Tags */}
      <Title>Contact Surety Limited | Get in Touch with Our Insurance Experts</Title>
      <Meta
        key="description"
        name="description"
        content="Contact Surety Limited for expert insurance and surety bond solutions. Book appointment for personalized assistance with your insurance needs."
      />
      <Meta
        name="keywords"
        content="contact surety limited, insurance contact, surety bonds contact, insurance experts, financial services contact, insurance consultation, contact form, insurance office location"
      />
      <Link rel="canonical" href="https://suretylimited.com/contact" />
      
      {/* Open Graph Tags for Social Media */}
      <Meta property="og:title" content="Contact Surety Limited | Get in Touch with Our Insurance Experts" />
      <Meta
        key="og:description"
        property="og:description"
        content="Contact Surety Limited for expert insurance and surety bond solutions. Reach our team via phone, email, or visit our office for personalized assistance."
      />
      <Meta property="og:url" content="https://suretylimited.com/contact" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://suretylimited.com/contact-og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact Surety Limited | Get in Touch with Our Insurance Experts" />
      <Meta
        key="twitter:description"
        name="twitter:description"
        content="Contact Surety Limited for expert insurance and surety bond solutions. Reach our team via phone, email, or visit our office for personalized assistance."
      />
      <Meta name="twitter:image" content="https://suretylimited.com/contact-twitter-image.jpg" />
      
      {/* Structured Data for Rich Snippets (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Surety Limited",
            "image": "https://suretylimited.com/logo.png",
            "url": "https://suretylimited.com",
            "email": "info@suretylimited.com",
            "description": "Global provider of insurance and surety bond solutions with exceptional expertise and service.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "17 Hanover Square",
              "addressLocality": "London",
              "postalCode": "W1S 1BN",
              "addressCountry": "United Kingdom"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:30"
            }
          }
        `}
      </script>

      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <MapLocation />
      <CallbackScheduler />
    </div>
  );
};

export default Contact;
