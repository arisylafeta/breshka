import React from 'react'

const Project2Page = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">High-Rise Development</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/images/project2.jpeg" 
              alt="High-Rise Development" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-gray-700 mb-4">
              This high-rise residential complex demonstrates our capability to handle large-scale construction projects.
              The modern towers feature luxury apartments with panoramic city views and state-of-the-art amenities for residents.
            </p>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">Metropolitan City Center</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Year Completed</h3>
                  <p className="text-gray-600">2024</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Number of Units</h3>
                  <p className="text-gray-600">350 residential units</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Client</h3>
                  <p className="text-gray-600">Urban Living Developments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2Page
