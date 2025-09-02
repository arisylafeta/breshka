"use client"

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import FeaturedProducts from '../../components/landing-page/FeaturedProducts'

const ProductsPage = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Products.jpg)' }}>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('ourFormworkProducts')}</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-white/90 mb-8">
              {t('productsHeroDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products (cards) */}
      <FeaturedProducts title="" />

      {/* Product Comparison Section */}
      <div className="bg-gray-50 dark:bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{t('compareProducts')}</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-gray-700">
              {t('compareDesc')}
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('features')}</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Alpha N</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">AluB</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Alu BMax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{t('material')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('materialSpec')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('materialStandardValue')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('materialStandardValue')}</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{t('freshConcretePressure')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('pressureValue')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('concretePressureValue')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('aluBMaxHighLoadDesc')}</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{t('bestFor')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('residentialConstruction')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('multiStoryBuildings')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('aluBMaxHighRise')}</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{t('specialFeature')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('alphaTechLock')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('manuportable')}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">{t('aluBMaxTripleAnchoringTitle')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">{t('needHelpChoosing')}</h3>
            <p className="text-gray-600">
              {t('expertConsultation')}
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage