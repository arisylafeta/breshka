"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../../contexts/LanguageContext'
import { InteractiveImageSwiper } from '../../../components/InteractiveImageSwiper'; // Adjust path if needed

export default function AlphaNProductPage() {
  const { t } = useLanguage()


  return (
    <div>
{/* Hero Image */}
<div className="relative h-[400px] md:h-[500px] w-full">
  <Image
    src="/images/AlphaN.jpg"
    alt="Alpha N Formwork"
    priority
    className="object-cover"
    fill
  />
  <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Alpha N</h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto">
        {t('alphaNHeroDesc')}
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
          <h1 className="text-4xl font-bold mb-4">Alpha N</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-full">
            {t('alphaNProductDesc')}
          </p>
        </div>

        {/* Product Image Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <InteractiveImageSwiper 
              images={["/images/AlphaN.jpg", "/images/AlphaN.jpg", "/images/AlphaN.jpg"]}
              cardWidth={600}
              cardHeight={600}
            />

          <div className="flex flex-col pt-8">
            <h2 className="text-2xl font-bold mb-6">Details</h2>
            <div className="space-y-8">
              {/* Quality of facing concrete */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-red-600">{t('qualityFacingConcrete')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('qualityFacingDesc')}
                </p>
              </div>

              {/* Assembly and anchoring system */}
              <div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-lg">{t('assemblyAnchoringSystem')}</span>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('alphaTechLock')}</span> {t('alphaTechLockDesc')}
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('multiFunctionCrossbeam')}</span> {t('multiFunctionDesc')}
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('anchoringSystem')}</span> {t('anchoringSystemDesc')}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ease of use */}
              <div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-lg">{t('easeOfUse')}</span>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('identicalFaces')}</span> {t('identicalFacesDesc')}
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('layout')}</span> {t('layoutDesc')}
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">{t('corners')}</span> {t('cornersDesc')}
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>○ {t('cornerTypes')}</li>
                            <li>○ {t('outerCorners')}</li>
                            <li>○ {t('insideCorner')}</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('technicalSpecifications')}</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Maximum adaptability */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-600">{t('maximumAdaptability')}</h3>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">{t('panelDimensions')}</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">{t('heights')}</span> {t('heightsValues')}</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">{t('widths')}</span> {t('widthsValues')}</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">{t('customSizes')}</span></div>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">{t('adaptabilityDesc')}</p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 my-8" />

            {/* Technical performance */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-600">{t('technicalPerformance')}</h3>
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">{t('permissiblePressure')}</td>
                      <td className="py-2 text-sm text-gray-600">{t('pressureValue')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">{t('material')}</td>
                      <td className="py-2 text-sm text-gray-600">{t('materialSpec')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">{t('coating')}</td>
                      <td className="py-2 text-sm text-gray-600">{t('coatingValue')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">{t('painting')}</td>
                      <td className="py-2 text-sm text-gray-600">{t('paintingValue')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">{t('crane')}</td>
                      <td className="py-2 text-sm text-gray-600">{t('craneValue')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Application Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('applicationExamples')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project1.jpeg" alt={t('residentialConstruction')} className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('residentialConstruction')}</h3>
                <p className="text-gray-600 text-sm">{t('residentialDesc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project2.jpeg" alt={t('commercialBuildings')} className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('commercialBuildings')}</h3>
                <p className="text-gray-600 text-sm">{t('commercialDesc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project3.jpeg" alt={t('infrastructureProjects')} className="w-full h-full object-cover" width={600} height={400} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t('infrastructureProjects')}</h3>
                <p className="text-gray-600 text-sm">{t('infrastructureDesc')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 my-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{t('interestedInAlphaFix')}</h3>
              <p className="text-gray-600 mb-6">{t('alphaFixContactDesc')}</p>
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
            <a href="/products/AluStar" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AlphaN.jpg" 
                    alt="Alpha N Formwork" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Alpha N</h3>
                  <p className="text-gray-600">{t('alphaNProductDesc')}</p>
                </div>
              </div>
            </a>

            {/* Product 2 */}
            <a href="/products/Plyform" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AlphaN.jpg" 
                    alt="Alpha N System" 
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
                    src="/images/AlphaN.jpg" 
                    alt="Alpha N System" 
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
