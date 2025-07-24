"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AluBProductPage() {
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
        Universal. Durable. Versatile. The aluminum formwork system for all your construction needs.
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
          <h1 className="text-4xl font-bold mb-4">AluB</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-full">
          The AluB system  is a manuportable aluminium formwork solution designed for the production of standard height straight concrete walls. It is particularly suitable for construction sites without cranes or in hard-to-reach areas.
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
                    src="/images/AluStar.jpg" 
                    alt={`AluStar Formwork ${index}`}
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
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Manuportable</span>
                  <p className="text-gray-600 mt-1">No need for a crane – easy handling by one person.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Lightweight and efficient</span>
                  <p className="text-gray-600 mt-1">Approx. 21.5 kg/m² for an excellent weight/strength ratio.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Optimal modularity</span>
                  <p className="text-gray-600 mt-1">Wide choice of standard panels (270 x 90, 60, 50, 30 cm) + custom-made construction.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Quality finish</span>
                  <p className="text-gray-600 mt-1">15 mm all-birch plywood, 220 g film – 1.5 mm plastic film option available.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Adaptability</span>
                  <ul className="text-gray-600 mt-1 ml-4 space-y-1">
                    <li>• Possibility of adding a wooden furring (up to 10 cm) between two panels to adjust the width.</li>
                    <li>• Corner and stabilization accessories available for all configurations.</li>
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
                  <span className="font-medium text-lg">Enhanced security</span>
                  <ul className="text-gray-600 mt-1 ml-4 space-y-1">
                    <li>• Service consoles, railing posts, push-pull props included.</li>
                    <li>• Stability and access accessories painted for better visibility.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Characteristics</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Material</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aluminum (mostly recycled)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Panel covering</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 mm birch plywood, 220 g film – optional 1.5 mm plastic film</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Edge profile thickness</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100 mm</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standard Dimensions - Height</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">270 cm</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standard Dimensions - Widths</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90, 60, 50, 30 cm + custom-made</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weight</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21.5 kg/m² | Panel 270 x 90 cm ≈ 65 kg</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Anchoring</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DW system Ø15 mm, double-sided clamping</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Number of rods</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 vertical rods for H 270 cm and 300 cm panels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Permissible concrete pressure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 tons/m²</td>
                </tr>
              </tbody>
            </table>
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
                <h3 className="font-bold text-lg mb-2">Commercial Construction</h3>
                <p className="text-gray-600 text-sm">Ideal for medium to large commercial buildings with complex concrete requirements.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project2.jpeg" alt="Multi-story Buildings" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Multi-story Buildings</h3>
                <p className="text-gray-600 text-sm">Perfect for constructing walls in multi-story residential and office buildings.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project3.jpeg" alt="Infrastructure Projects" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Infrastructure Projects</h3>
                <p className="text-gray-600 text-sm">Used in bridges, tunnels, and other medium-sized infrastructure elements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 my-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Interested in AluStar for your project?</h3>
              <p className="text-gray-600 mb-6">Contact our team for a quote or to learn more about how AluStar can benefit your construction project.</p>
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
            <a href="/products/AluFix" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/AluFix.jpg" 
                    alt="AluFix Formwork" 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">AluFix</h3>
                  <p className="text-gray-600">Lightweight, portable formwork system for efficient construction.</p>
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
