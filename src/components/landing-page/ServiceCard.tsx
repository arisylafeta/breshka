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
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-200">
      <div className="flex flex-col">
        {/* Title */}
        <div className="p-4 md:p-6 pb-2 md:pb-3">
          <h3 className="text-lg md:text-xl font-bold text-foreground">{t(titleKey)}</h3>
        </div>

        {/* Image */}
        <div className="relative w-full h-40 md:h-48">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Description */}
        <div className="p-4 md:p-6">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide">
            {t(descKey)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
