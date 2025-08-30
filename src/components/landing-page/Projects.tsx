'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{t('ourProjects')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src="/images/project1.jpeg" alt="Project 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-2">{t('modernOffice')}</h3>
              <p className="text-gray-200 mb-4 text-sm">{t('commercialConstruction')}</p>
              <a href="/projects/project1" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src="/images/project2.jpeg" alt="Project 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-2">{t('highRise')}</h3>
              <p className="text-gray-200 mb-4 text-sm">{t('residentialComplex')}</p>
              <a href="/projects/project2" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src="/images/project3.jpeg" alt="Project 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-xl font-bold text-white mb-2">{t('contemporaryMuseum')}</h3>
              <p className="text-gray-200 mb-4 text-sm">{t('culturalArchitecture')}</p>
              <a href="/projects/project3" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
