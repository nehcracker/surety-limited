// src/pages/Contact.jsx
import React from "react";
import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactFormSection from "../../components/contact/ContactFormSection/ContactFormSection";
import MapLocation from "../../components/contact/MapLocation/MapLocation";
import CallbackScheduler from "../../components/contact/CallbackScheduler/CallbackScheduler";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <MapLocation />
      <CallbackScheduler />
    </div>
  );
};

export default Contact;
