import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="pb-20 bg-background">
      {/* Hero Image */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <Image
          src="/images/service.png"
          alt="service"
          priority
          className="object-cover object-center"
          fill
        />
      </div>

      <div className="container mx-auto px-4 pt-16">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer comprehensive construction solutions tailored to your specific needs, from planning to execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/Service.jpg" 
                alt="Construction Planning" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Construction Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive planning services that ensure your project starts with a solid foundation. Our experts analyze requirements, develop timelines, and create detailed execution plans.
              </p>
              <Link href="/services/planning" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/Onsite.jpg" 
                alt="Project Management" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-gray-600 mb-4">
                End-to-end project management services that ensure your construction project is completed on time, within budget, and to the highest quality standards.
              </p>
              <Link href="/services/management" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/AluStar.jpg" 
                alt="Formwork Solutions" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Formwork Solutions</h3>
              <p className="text-gray-600 mb-4">
                Specialized formwork solutions for concrete structures of all types. We provide advanced systems that ensure precision, efficiency, and safety.
              </p>
              <Link href="/services/formwork" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/StarTex.jpg" 
                alt="Concrete Works" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Concrete Works</h3>
              <p className="text-gray-600 mb-4">
                Expert concrete services including pouring, finishing, and specialized treatments. We ensure durability, aesthetic appeal, and structural integrity.
              </p>
              <Link href="/services/concrete" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/Know.jpg" 
                alt="Consulting Services" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Consulting Services</h3>
              <p className="text-gray-600 mb-4">
                Professional consulting on construction methods, materials selection, and technical solutions to optimize your project&apos;s efficiency and cost-effectiveness.
              </p>
              <Link href="/services/consulting" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image 
                src="/images/Rental.jpg" 
                alt="Equipment Rental" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Equipment Rental</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive equipment rental services including formwork systems, scaffolding, and specialized construction tools to support your project needs.
              </p>
              <Link href="/services/rental" className="text-red-600 font-medium hover:text-red-800 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in all our services, ensuring durable and reliable results.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and ensure that all projects are completed on schedule.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with deep knowledge in various construction specialties.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help bring your construction project to life.
          </p>
          <Link href="/contact" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
