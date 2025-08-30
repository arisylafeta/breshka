'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/landing-page/ProductCard';

const FeaturedProducts: React.FC<{ title?: string }> = ({ title }) => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">{title ?? t('popularProducts')}</h2>

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
            imageSrc="/images/AluB.png"
            imageAlt="AluB Formwork"
            title="Alu B"
            categoryKey="wallFormwork"
            descKey="aluBDesc"
          />

          <ProductCard
            href="/products/alub-max"
            imageSrc="/images/aluBMax.png"
            imageAlt="AluB Max Formwork"
            title="AluB Max"
            categoryKey="wallFormwork"
            descKey="starTecDesc"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
