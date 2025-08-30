'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export type ProductCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  categoryKey?: string; // i18n key for small category label
  descKey?: string; // i18n key for description
  className?: string; // allow grid span from parent
};

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  title,
  categoryKey,
  descKey,
  className,
}) => {
  const { t } = useLanguage();
  const cta = t('learnMore') === 'learnMore' ? 'Learn more' : t('learnMore');

  return (
    <Link href={href} className={`group block h-full focus:outline-none ${className ?? ''}`}>
      <article
        className={[
          'relative h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all',
          'hover:shadow-md hover:-translate-y-0.5 focus-visible:shadow-md focus-visible:-translate-y-0.5',
        ].join(' ')}
      >
        {/* Image container */}
        <div className="relative">
          <div
            className={[
              'relative w-full overflow-hidden h-48 sm:h-52 md:h-56',
            ].join(' ')}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={false}
            />
          </div>

          {/* Accent line under image */}
          <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          {categoryKey && (
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
              {t(categoryKey)}
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>

          {descKey && (
            <p
              className="text-muted-foreground text-sm md:text-base leading-relaxed min-h-[72px]"
              style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
              {t(descKey)}
            </p>
          )}

          {/* CTA */}
          <div className="mt-auto flex justify-start">
            <span
              className={[
                'inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-white',
                'shadow-sm hover:bg-red-700 transition-colors',
              ].join(' ')}
            >
              <span className="text-sm font-semibold">{cta}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* subtle radial hover glow */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
             style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(225,29,72,0.08), transparent 40%)' }} />
      </article>
    </Link>
  );
};

export default ProductCard;
