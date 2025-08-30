'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send');
      setResult({ ok: true, msg: t('messageSent') || 'Message sent successfully.' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message.';
      setResult({ ok: false, msg });
    } finally {
      setSubmitting(false);
    }
  }

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contactFormName')}</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contactFormEmail')}</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contactFormMessage')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? (t('sending') || 'Sending...') : t('contactFormSend')}
                </button>
                {result && (
                  <div
                    className={`mt-4 rounded-md p-4 border flex items-start gap-3 transition-colors duration-300 ${
                      result.ok
                        ? 'bg-green-50 border-green-300 text-green-800'
                        : 'bg-red-50 border-red-300 text-red-800'
                    }`}
                  >
                    {result.ok ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 flex-shrink-0 text-green-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 7.97a.75.75 0 00-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.293.293.767.293 1.06 0l5.25-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 flex-shrink-0 text-red-600"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <div>
                      <p className="font-medium">
                        {result.ok ? (t('messageSent') || 'Message sent successfully.') : (t('error') || 'Something went wrong')}
                      </p>
                      <p className="text-sm opacity-90">{result.msg}</p>
                    </div>
                  </div>
                )}
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