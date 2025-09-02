'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/landing-page/ProductCard';

const FeaturedProducts: React.FC<{ title?: string }> = ({ title }) => {
  const { t } = useLanguage();
  // If title is undefined, use default translated title.
  // If title is an empty string, hide the heading entirely.
  const heading = title === undefined ? t('popularProducts') : title;

  return (
    <div className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        {heading && (
          <h2 className="text-3xl font-bold mb-12">{heading}</h2>
        )}

        {/* Grid: 1 → 2 → 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            href="/products/alpha-n"
            imageSrc="/images/AlphaN.jpg"
            imageAlt="Alpha N Formwork"
            title="Alpha N"
            categoryKey="wallFormwork"
            descKey="alphaNDesc"
          />

          <ProductCard
            href="/products/alub"
            imageSrc="/images/Alub.png"
            imageAlt="Alu B Formwork"
            title="Alu B"
            categoryKey="wallFormwork"
            descKey="aluBDesc"
          />

          <ProductCard
            href="/products/alu-bmax"
            imageSrc="/images/aluBMax.png"
            imageAlt="Alu BMax Formwork"
            title="Alu BMax"
            categoryKey="wallFormwork"
            descKey="aluBMaxDesc"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
