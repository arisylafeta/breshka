"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import FeaturedProducts from '@/components/landing-page/FeaturedProducts';
import ContactSection from '@/components/landing-page/ContactSection';

type AccessoryItem = {
  img: string;
  titleKey: string;
  descKey: string;
};

const accessoriesItems: AccessoryItem[] = [
  { img: '/accessories/1.png', titleKey: 'accClampBF120Title', descKey: 'accClampBF120Desc' },
  { img: '/accessories/2.png', titleKey: 'accUniversalClampBF120Title', descKey: 'accUniversalClampBF120Desc' },
  { img: '/accessories/3.png', titleKey: 'accLevelingClampBF120Title', descKey: 'accLevelingClampBF120Desc' },
  { img: '/accessories/4.png', titleKey: 'accEndAnchorBF120Title', descKey: 'accEndAnchorBF120Desc' },
  { img: '/accessories/5.png', titleKey: 'accFlangeNutTitle', descKey: 'accFlangeNutDesc' },
  { img: '/accessories/6.png', titleKey: 'accArticulatedNutTitle', descKey: 'accArticulatedNutDesc' },
  { img: '/accessories/7.png', titleKey: 'accTieRodTitle', descKey: 'accTieRodDesc' },
  { img: '/accessories/8.png', titleKey: 'accDieBF120Title', descKey: 'accDieBF120Desc' },
  { img: '/accessories/9.png', titleKey: 'accTurnbuckleTitle', descKey: 'accTurnbuckleDesc' },
  { img: '/accessories/11.jpeg', titleKey: 'accTransportHookBF120Title', descKey: 'accTransportHookBF120Desc' },
  { img: '/accessories/12.png', titleKey: 'accDoubleEntryForkTitle', descKey: 'accDoubleEntryForkDesc' },
  { img: '/accessories/13.jpeg', titleKey: 'accEdgeFormworkSupportTitle', descKey: 'accEdgeFormworkSupportDesc' },
];

const Card: React.FC<{ item: AccessoryItem; t: (k: string) => string }>
  = ({ item, t }) => (
  <article className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-red-100 transition-all hover:ring-2 hover:ring-red-300">
    <div className="relative w-full h-48 sm:h-56 md:h-60">
      <Image
        src={item.img}
        alt={t(item.titleKey)}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain bg-white"
      />
    </div>
    <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
    <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-red-600" aria-hidden />
        <h3 className="text-lg md:text-xl font-bold">{t(item.titleKey)}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{t(item.descKey)}</p>
    </div>
    {/* subtle hover glow */}
    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(225,29,72,0.06), transparent 40%)' }} />
  </article>
);

const AccessoriesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero with background image */}
      <section className="relative isolate">
        <div className="relative h-[320px] md:h-[420px]">
          <Image
            src="/accessories/background.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                {t('accessoriesHeroTitle')}
              </h1>
              <div className="mt-3 h-1 w-24 bg-red-500" />
              <p className="mt-4 max-w-3xl text-white/90 text-base md:text-lg">
                {t('accessoriesHeroDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-10 md:py-14 bg-rose-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {accessoriesItems.map((item, idx) => (
              <Card key={idx} item={item} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">{t('accessoriesApplicationsTitle')}</h2>
          <div className="mt-2 h-1 w-20 bg-red-600" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{t('accessoriesApp1Title')}</h3>
              <p className="text-gray-700">{t('accessoriesApp1Desc')}</p>
            </div>
            <div className="rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{t('accessoriesApp2Title')}</h3>
              <p className="text-gray-700">{t('accessoriesApp2Desc')}</p>
            </div>
            <div className="rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{t('accessoriesApp3Title')}</h3>
              <p className="text-gray-700">{t('accessoriesApp3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <FeaturedProducts title={t('youMightAlsoLike')} />

      {/* Contact */}
      <ContactSection />
    </main>
  );
};

export default AccessoriesPage;