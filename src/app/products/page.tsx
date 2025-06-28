import React from 'react'
import Image from 'next/image'

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Formwork Products</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8">
              Discover our premium formwork solutions designed for efficiency, durability, and versatility across all construction projects.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* AluFix Product Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/AluFix.jpg" 
                alt="AluFix Formwork" 
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
              <h3 className="text-2xl font-bold mb-4">AluFix</h3>
              <p className="text-gray-600 mb-6 h-24 overflow-hidden">
                AluFix is MEVA&apos;s lightweight, portable formwork. The modular aluminum formwork impresses with its optimized heights for efficient formwork without the need for extensions.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Aluminum Construction</span>
                <a href="/products/AluFix" className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* AluStar Product Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/AluStar.jpg" 
                alt="AluStar Formwork" 
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
              <h3 className="text-2xl font-bold mb-4">AluStar</h3>
              <p className="text-gray-600 mb-6 h-24 overflow-hidden">
                AluStar is a universal, hand-held formwork made of aluminum. Lightweight and easy to handle, it offers versatility for a wide range of construction applications.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Universal Application</span>
                <a href="/products/AluStar" className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* StarTec XT Product Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/StarTex.jpg" 
                alt="StarTec XT Formwork" 
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
              <h3 className="text-2xl font-bold mb-4">StarTec XT</h3>
              <p className="text-gray-600 mb-6 h-24 overflow-hidden">
                The StarTec XT formwork combines three anchoring methods thanks to the integrated Combi rod guide, offering exceptional versatility and efficiency.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Triple Anchoring System</span>
                <a href="/products/StarTex" className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Comparison Section */}
      <div className="bg-gray-50 dark:bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Compare Our Products</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-gray-700">
              Find the perfect formwork solution for your specific construction needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Features</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">AluFix</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">AluStar</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">StarTec XT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Material</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Aluminum</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Aluminum with steel reinforcement</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Steel</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Weight</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Lightweight (20 kg/m²)</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Medium (23 kg/m²)</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Heavy-duty (45 kg/m²)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Fresh Concrete Pressure</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">50 kN/m²</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">60 kN/m²</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">80 kN/m²</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Best For</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Small to medium projects</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Medium to large projects</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Large commercial & infrastructure</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Special Feature</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Optimized heights</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Enhanced durability</td>
                  <td className="py-4 px-6 text-sm text-gray-500 text-center">Triple anchoring system</td>
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
            <h3 className="text-2xl font-bold mb-4">Need help choosing the right formwork?</h3>
            <p className="text-gray-600">
              Our team of experts can help you determine the best formwork solution for your specific construction needs. Contact us today for a personalized consultation.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage