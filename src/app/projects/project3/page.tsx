import React from 'react'
import Image from 'next/image'

const Project3Page = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contemporary Museum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image 
              src="/images/project3.jpeg" 
              alt="Contemporary Museum" 
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-gray-700 mb-4">
              This award-winning contemporary museum showcases our expertise in cultural architecture.
              The innovative design features dramatic lighting, open exhibition spaces, and sustainable building practices.
            </p>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">Arts District, Central City</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Year Completed</h3>
                  <p className="text-gray-600">2022</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Exhibition Space</h3>
                  <p className="text-gray-600">75,000 sq ft</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Client</h3>
                  <p className="text-gray-600">National Arts Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project3Page
