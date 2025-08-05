"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../../contexts/LanguageContext'
import { InteractiveImageSwiper } from '../../../components/InteractiveImageSwiper'; // Adjust path if needed

export default function AluBProductPage() {
  const { t } = useLanguage()
  return (
    <div>
{/* Hero Image */}
<div className="relative h-[400px] md:h-[500px] w-full">
  <Image
    src="/images/AluB.jpg"
    alt="AluB Formwork"
    priority
    className="object-cover"
    fill
  />
  <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">AluB</h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto">
        {t('aluBHeroDesc')}
      </p>
    </div>
  </div>
</div>


      <div className="py-20 bg-background w-full">
        <div className="container mx-auto px-4 w-full">
        {/* Product Header */}
        <div className="mb-12 w-full">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">{t('productsWallFormwork')}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AluB</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-full">
            {t('aluBProductDesc')}
          </p>
        </div>

        {/* Product Image Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <InteractiveImageSwiper 
              images={["/images/AluB.jpg", "/images/AluB.jpg", "/images/AluB.jpg"]}
              cardWidth={600}
              cardHeight={600}
            />
          <div className="flex flex-col pt-8">
            <h2 className="text-2xl font-bold mb-6">{t('keyBenefits')}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('manuportable')}</span>
                  <p className="text-gray-600 mt-1">{t('manuportableDesc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('lightweightEfficient')}</span>
                  <p className="text-gray-600 mt-1">{t('lightweightEfficientDesc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('optimalModularity')}</span>
                  <p className="text-gray-600 mt-1">{t('optimalModularityDesc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('qualityFinish')}</span>
                  <p className="text-gray-600 mt-1">{t('qualityFinishDesc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('aluBAdaptability')}</span>
                  <ul className="text-gray-600 mt-1 ml-4 space-y-1">
                    <li>• {t('aluBAdaptabilityPoint1')}</li>
                    <li>• {t('aluBAdaptabilityPoint2')}</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">{t('enhancedSecurity')}</span>
                  <ul className="text-gray-600 mt-1 ml-4 space-y-1">
                    <li>• {t('enhancedSecurityPoint1')}</li>
                    <li>• {t('enhancedSecurityPoint2')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('technicalCharacteristics')}</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('specification')}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('aluBDetailsHeader')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('material')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('materialAluminum')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('panelCovering')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('panelCoveringValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('edgeProfileThickness')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('edgeProfileValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('standardDimensionsHeight')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('standardHeightValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('standardDimensionsWidths')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('standardWidthsValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('aluBWeight')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('aluBWeightValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('aluBAnchoring')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('anchoringValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('numberOfRods')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('numberOfRodsValue')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('permissibleConcretePressure')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t('concretePressureValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('applicationExamples')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project1.jpeg" alt={t('aluBCommercialConstruction')} className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('aluBCommercialConstruction')}</h3>
                <p className="text-gray-600 text-sm">{t('aluBCommercialConstructionDesc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project2.jpeg" alt={t('multiStoryBuildings')} className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('multiStoryBuildings')}</h3>
                <p className="text-gray-600 text-sm">{t('multiStoryBuildingsDesc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project3.jpeg" alt={t('infrastructureBridges')} className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('infrastructureBridges')}</h3>
                <p className="text-gray-600 text-sm">{t('infrastructureBridgesDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 my-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{t('interestedInAluStar')}</h3>
              <p className="text-gray-600 mb-6">{t('aluStarContactDesc')}</p>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
                {t('contactUs')}
              </a>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('youMightAlsoLike')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <a href="/products/AluFix" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AluB.jpg" 
                    alt="AluFix Formwork" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">AluFix</h3>
                  <p className="text-gray-600">{t('aluFixDesc')}</p>
                </div>
              </div>
            </a>

            {/* Product 2 */}
            <a href="/products/Plyform" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AluB.jpg" 
                    alt="Plyform System" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Plyform</h3>
                  <p className="text-gray-600">{t('plyformDesc')}</p>
                </div>
              </div>
            </a>

            {/* Product 3 */}
            <a href="/products/Table-Form" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AluB.jpg" 
                    alt="Table Form System" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Table Form</h3>
                  <p className="text-gray-600">{t('tableFormDesc')}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
