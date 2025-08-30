'use client';

import React from 'react';
import MessageImage from '@/components/MessageImage';
import { useLanguage } from '@/contexts/LanguageContext';

const Quote = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-red-600 w-full max-w-2xl"></div>
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <MessageImage />

            {/* Quote Section */}
            <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
              <div className="text-5xl font-serif text-red-600 mb-6">&ldquo;</div>
              <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
                {t('leadershipQuote')}
              </blockquote>
              <div className="border-t border-gray-200 w-20 my-6"></div>
              <div className="text-lg font-medium text-gray-900">{t('ceoName')}</div>
              <div className="text-gray-600">{t('ceoTitle')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
