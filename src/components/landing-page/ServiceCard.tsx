'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  titleKey: string;
  descKey: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, imageAlt, titleKey, descKey }) => {
  const { t } = useLanguage();

  return (
    <div className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200">
      <div className="flex flex-col">
        {/* Image */}
        <div className="relative w-full h-44 md:h-56">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{t(titleKey)}</h3>
          <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-20 group-hover:from-red-600 group-hover:to-red-500" />
          <p className="mt-3 text-gray-600 leading-relaxed">
            {t(descKey)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
