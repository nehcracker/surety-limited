import React from 'react';
import ServicesHero from '../../components/services/ServicesHero/ServicesHero';
import SuretyBonds from '../../components/services/SuretyBonds/SuretyBonds';
import GeneralInsurance from '../../components/services/GeneralInsurance/GeneralInsurance';
import CorporateRisk from '../../components/services/CorporateRisk/CorporateRisk';
import GlobalPrograms from '../../components/services/GlobalPrograms/GlobalPrograms';
import ServiceCTA from '../../components/services/ServiceCTA/ServiceCTA';

function Services() {
  return (
    <div>
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

