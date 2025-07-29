'use client';

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-20 bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/images/Contact.webp"
          alt="contact"
          priority
          className="object-cover"
          fill
        />
      </div>

      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold mb-8">{t('contactUsTitle')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contactFormName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contactFormEmail')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contactFormMessage')}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {t('contactFormSend')}
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{t('contactInformation')}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">{t('contactAddress')}</h3>
                  <p className="text-gray-600">{t('contactAddressValue')}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t('contactPhone')}</h3>
                  <p className="text-gray-600">{t('contactPhoneValue')}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t('contactEmailLabel')}</h3>
                  <p className="text-gray-600">{t('contactEmailValue')}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t('workingHours')}</h3>
                  <p className="text-gray-600">{t('workingHoursWeekdays')}</p>
                  <p className="text-gray-600">{t('workingHoursWeekends')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage