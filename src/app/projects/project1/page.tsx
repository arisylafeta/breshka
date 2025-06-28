import React from 'react'

const Project1Page = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Modern Office Building</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/images/project1.jpeg" 
              alt="Modern Office Building" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-gray-700 mb-4">
              This modern office building project showcases our expertise in commercial construction. 
              The sleek design and open interior spaces create an ideal working environment for businesses.
            </p>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">Downtown Business District</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Year Completed</h3>
                  <p className="text-gray-600">2023</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Square Footage</h3>
                  <p className="text-gray-600">125,000 sq ft</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Client</h3>
                  <p className="text-gray-600">TechCorp Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project1Page
