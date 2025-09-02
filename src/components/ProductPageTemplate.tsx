"use client"

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { InteractiveImageSwiper } from './InteractiveImageSwiper'
import Image from 'next/image'
import FeaturedProducts from './landing-page/FeaturedProducts'

export type TechSpecRow = { labelKey: string; valueKey: string }
export type DetailItem = { titleKey: string; descKey: string }
export type ApplicationItem = { titleKey: string; descKey: string }

export type ProductPageConfig = {
  title: string
  heroImage: string
  heroDescKey: string
  productDescKey: string
  carouselImages: string[]
  useCarousel?: boolean
  detailsTitleKey?: string
  details?: DetailItem[]
  techSpecsTitleKey?: string
  techSpecs?: TechSpecRow[]
  specHeaderKey?: string
  applicationsTitleKey?: string
  applications?: ApplicationItem[]
  ctaTitleKey?: string
  ctaDescKey: string
}

const ProductPageTemplate: React.FC<{ config: ProductPageConfig }> = ({ config }) => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${config.heroImage})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{config.title}</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{t(config.heroDescKey)}</p>
        </div>
      </div>

      {/* Intro + Carousel + Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{config.title}</h2>
          <div className="w-16 h-1 bg-red-600 mb-6" />
          <p className="text-lg text-gray-700">{t(config.productDescKey)}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {config.useCarousel && config.carouselImages && config.carouselImages.length > 0 ? (
              <InteractiveImageSwiper
                images={config.carouselImages}
                cardWidth={720}
                cardHeight={480}
                className="mx-auto"
              />
            ) : (
              <div className="relative w-full max-w-[720px] h-[480px] mx-auto rounded-xl overflow-hidden shadow">
                <Image
                  src={config.carouselImages?.[0] ?? config.heroImage}
                  alt={`${config.title} image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
          {config.details && config.details.length > 0 && (
            <div>
              {config.detailsTitleKey && (
                <h3 className="text-2xl font-bold mb-4">{t(config.detailsTitleKey)}</h3>
              )}
              <ul className="space-y-6">
                {config.details.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-4 mt-1 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{t(item.titleKey)}</h4>
                      <p className="text-gray-600">{t(item.descKey)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Details moved next to carousel above */}

      {/* Technical Specs */}
      {config.techSpecs && config.techSpecs.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            {config.techSpecsTitleKey && (
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold">{t(config.techSpecsTitleKey)}</h2>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">{t('specification')}</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">{t(config.specHeaderKey ?? 'details')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {config.techSpecs.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 text-sm text-gray-900">{t(row.labelKey)}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{t(row.valueKey)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Applications */}
      {config.applications && config.applications.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          {config.applicationsTitleKey && (
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold">{t(config.applicationsTitleKey)}</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.applications.map((app, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{t(app.titleKey)}</h3>
                <div className="mt-2 h-px w-12 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-20 group-hover:from-red-600 group-hover:to-red-500" />
                <p className="mt-3 text-gray-600 leading-relaxed">{t(app.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Similar Products */}
      <FeaturedProducts title={t('youMightAlsoLike')} />

      {/* CTA */}
      <div className="bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 my-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            {config.ctaTitleKey && <h3 className="text-2xl font-bold mb-2">{t(config.ctaTitleKey)}</h3>}
            <p className="text-gray-600 mb-6">{t(config.ctaDescKey)}</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPageTemplate
