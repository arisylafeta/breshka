'use client';

import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 border-t border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Projects */}
        <div className="flex-1 px-8 py-6 relative">
          <h3 className="text-5xl font-normal text-red-600 mb-2">
            <AnimatedCounter end={90} suffix="+" className="inline-block" />
          </h3>
          <h4 className="text-lg font-medium text-red-600 mb-3">{t('projects')}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{t('projectsDesc')}</p>
          {/* Vertical Red Line */}
          <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
        </div>

        {/* Locations */}
        <div className="flex-1 px-8 py-6 relative">
          <h3 className="text-5xl font-normal text-red-600 mb-2">
            <AnimatedCounter end={5} suffix="+" className="inline-block" />
          </h3>
          <h4 className="text-lg font-medium text-red-600 mb-3">{t('locations')}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{t('locationsDesc')}</p>
          {/* Vertical Red Line */}
          <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
        </div>

        {/* Experience */}
        <div className="flex-1 px-8 py-6 relative">
          <h3 className="text-5xl font-normal text-red-600 mb-2">
            <AnimatedCounter end={14} suffix="+" className="inline-block" />
          </h3>
          <h4 className="text-lg font-medium text-red-600 mb-3">{t('experience')}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{t('experienceDesc')}</p>
          {/* Vertical Red Line */}
          <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
        </div>

        {/* m² Sold */}
        <div className="flex-1 px-8 py-6">
          <h3 className="text-5xl font-normal text-red-600 mb-2">
            <AnimatedCounter end={250000} suffix="" className="inline-block" />
          </h3>
          <h4 className="text-lg font-medium text-red-600 mb-3">{t('squareMeters')}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{t('squareMetersDesc')}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
