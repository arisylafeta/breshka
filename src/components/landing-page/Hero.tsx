'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.png)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full pl-0 pr-8 md:pl-8 lg:pl-16 z-10">
          <div className="relative text-left max-w-2xl text-white p-10 rounded-r-3xl bg-black/30 backdrop-blur-[1.5px] w-full max-w-3xl">
            {/* Background effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1.5px] rounded-r-3xl -z-10"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {t('heroTitle')}
              <span className="text-white">{t('heroTitleSpan')}</span>
            </h1>
            <p className="text-xl font-bold text-white mb-8 leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4r">
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                {t('getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
