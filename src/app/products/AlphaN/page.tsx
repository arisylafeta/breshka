"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AlphaNProductPage() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev % 3) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
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
        Lightweight. Modular. Efficient. The next generation of portable formwork.
      </p>
    </div>
  </div>
</div>


      <div className="py-20 bg-background w-full">
        <div className="container mx-auto px-4 w-full">
        {/* Product Header */}
        <div className="mb-12 w-full">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">Wall formwork</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Alpha N</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-full">
            Every construction site is different, with its own requirements. The Alpha N formwork system has been designed to meet these requirements with maximum flexibility. Modular, it adapts to all configurations, ensuring that you always have the right equipment, regardless of the complexity of the structure.
          </p>
        </div>

        {/* Product Image Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '600px' }}>
            <div className="relative w-full h-full">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image 
                    src="/images/AlphaN.jpg" 
                    alt={`Alpha N Formwork ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to slide ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="text-2xl font-bold mb-6">Details</h2>
            <div className="space-y-8">
              {/* Quality of facing concrete */}
              <div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-lg">Quality of facing concrete assured</span>
                    <p className="text-gray-600 mt-2">Thanks to a symmetrical layout of the rod passages and various panel sizes, Alpha N allows a homogeneous materialization of joints and panel holes, thus meeting the aesthetic requirements of exposed concrete.</p>
                  </div>
                </div>
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
                    <span className="font-medium text-lg">Assembly and anchoring system</span>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">AlphaTECH lock:</span> quick fastening of panels with simple hammer blows
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">Multi-function crossbeam:</span> Welded DW nuts for quick installation of accessories with one piece – the flange screw
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">Anchoring system:</span> DW Ø 15 mm with 80 kN load capacity double-sided
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
                    <span className="font-medium text-lg">Ease of use</span>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">Identical faces:</span> no mistakes, faster installation
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">Layout:</span> symmetrical horizontal and vertical installation
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <div>
                          <span className="font-medium">Corners:</span> corner solutions that can be implemented for all wall thicknesses, with a complete range:
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>○ Inside, outside, hinged and slashing corners</li>
                            <li>○ Three outer corners (0.5 cm and 10 cm on each side)</li>
                            <li>○ Inside corner (30 cm on each side)</li>
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
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Maximum adaptability */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-600">Maximum adaptability</h3>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Panel dimensions:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">Heights:</span> 330 cm, 270 cm, 150 cm</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">Widths:</span> ranging from from 270 cm to 30 cm (240 cm, 120 cm, 90 cm, 60 cm, 50 cm, 45 cm, 40 cm)</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div><span className="font-medium">Other custom sizes available</span></div>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">These dimensions make it possible to quickly adapt to the geometry of the building and to achieve all the usual wall thicknesses without compensation parts.</p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 my-8" />

            {/* Technical performance */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Technical performance</h3>
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">Permissible pressure</td>
                      <td className="py-2 text-sm text-gray-600">80 kN/m² for a single wall</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">Material</td>
                      <td className="py-2 text-sm text-gray-600">high-dimensional, torsion-resistant steel</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">Coating</td>
                      <td className="py-2 text-sm text-gray-600">220 g/m² phenolic resin on both sides</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">Painting</td>
                      <td className="py-2 text-sm text-gray-600">electromatic</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm font-medium text-gray-900">Crane</td>
                      <td className="py-2 text-sm text-gray-600">requires the use of a crane</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Application Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Application Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project1.jpeg" alt="Residential Construction" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Residential Construction</h3>
                <p className="text-gray-600 text-sm">Perfect for foundation walls and basement construction in residential projects.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project2.jpeg" alt="Commercial Buildings" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Commercial Buildings</h3>
                <p className="text-gray-600 text-sm">Ideal for small to medium-sized commercial construction projects.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project3.jpeg" alt="Infrastructure Projects" className="w-full h-full object-cover" width={600} height={400} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Infrastructure Projects</h3>
                <p className="text-gray-600 text-sm">Used in smaller infrastructure elements like retaining walls and foundations.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 my-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Interested in AluFix for your project?</h3>
              <p className="text-gray-600 mb-6">Contact our team for a quote or to learn more about how AluFix can benefit your construction project.</p>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <a href="/products/AluStar" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AluStar.jpg" 
                    alt="AluStar Formwork" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">AluStar</h3>
                  <p className="text-gray-600">Heavy-duty aluminum formwork system for large-scale concrete structures.</p>
                </div>
              </div>
            </a>

            {/* Product 2 */}
            <a href="/products/Plyform" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/Plyform.jpg" 
                    alt="Plyform System" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Plyform</h3>
                  <p className="text-gray-600">Versatile plywood formwork system for walls, columns, and slabs.</p>
                </div>
              </div>
            </a>

            {/* Product 3 */}
            <a href="/products/Table-Form" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/Table-Form.jpg" 
                    alt="Table Form System" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Table Form</h3>
                  <p className="text-gray-600">Flying form system for efficient slab construction in high-rise buildings.</p>
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
