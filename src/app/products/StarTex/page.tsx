import React from 'react'
import Image from 'next/image'

const StarTecXTProductPage = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Product Header */}
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">Wall formwork</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">StarTec XT</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            The StarTec XT formwork combines three anchoring methods thanks to the integrated Combi rod guide, offering exceptional versatility and efficiency for your construction projects.
          </p>
        </div>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/StarTex.jpg" 
              alt="StarTec XT Formwork" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Triple Anchoring System</span>
                  <p className="text-gray-600 mt-1">Integrated Combi rod guide allows for three different anchoring methods in one system.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">High Load Capacity</span>
                  <p className="text-gray-600 mt-1">Designed to handle significant fresh concrete pressure, making it suitable for a wide range of applications.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Robust Steel Frame</span>
                  <p className="text-gray-600 mt-1">Heavy-duty steel construction ensures durability and longevity even in demanding construction environments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Versatile Application</span>
                  <p className="text-gray-600 mt-1">Perfect for both residential and commercial construction projects of various scales and complexities.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Steel frame with powder coating</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Panel Heights</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">330, 270, 240, 135, 90, 60, 30 cm</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Panel Widths</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90, 75, 60, 50, 45, 30, 25, 20 cm</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fresh Concrete Pressure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">80 kN/m²</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weight</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Approx. 45 kg/m²</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Anchoring Methods</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DW tie rod, XT tie rod, MX tie rod</td>
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
                <Image src="/images/project1.jpeg" alt="High-Rise Construction" className="w-full h-full object-cover" width={600} height={400} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">High-Rise Construction</h3>
                <p className="text-gray-600 text-sm">Perfect for large-scale high-rise buildings requiring robust formwork solutions.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project2.jpeg" alt="Industrial Construction" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Industrial Facilities</h3>
                <p className="text-gray-600 text-sm">Ideal for industrial buildings with complex structural requirements.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image src="/images/project3.jpeg" alt="Infrastructure Projects" className="w-full h-full object-cover" width={400} height={300} />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Infrastructure Projects</h3>
                <p className="text-gray-600 text-sm">Used in bridges, tunnels, and other major infrastructure elements requiring high load capacity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold mb-2">Ready to use StarTec XT for your next project?</h3>
            <p className="text-gray-600">Contact our team to discuss how StarTec XT can meet your specific construction requirements.</p>
          </div>
          <div>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarTecXTProductPage
