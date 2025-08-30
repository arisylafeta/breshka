'use client';

import React from 'react';
import ServiceCard from '@/components/landing-page/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-20">
      <h2 className="text-3xl font-bold mb-12">{t('whatWeOffer')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        <ServiceCard
          imageSrc="/images/Rental.jpg"
          imageAlt="Rental"
          titleKey="rental"
          descKey="rentalDesc"
        />
        <ServiceCard
          imageSrc="/images/Know.jpg"
          imageAlt="Technical know-how"
          titleKey="technicalKnowHow"
          descKey="technicalDesc"
        />
        <ServiceCard
          imageSrc="/images/Service.jpg"
          imageAlt="Repair and maintenance"
          titleKey="repairMaintenance"
          descKey="repairDesc"
        />
        <ServiceCard
          imageSrc="/images/Onsite.jpg"
          imageAlt="On-site assistance"
          titleKey="onsiteAssistance"
          descKey="onsiteDesc"
        />
      </div>
    </div>
  );
};

export default Services;
