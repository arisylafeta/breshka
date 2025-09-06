'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  // Build phone numbers from translations (same pattern as Header/Footer)
  const phoneNumberKeys = ['phone1', 'phone2'] as const;
  const phoneNumbers = phoneNumberKeys
    .map((k) => t(k))
    .filter((v) => v && v !== 'phone1' && v !== 'phone2');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, phone, country, message, privacy, newsletter }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send');
      setResult({ ok: true, msg: t('messageSent') || 'Message sent successfully.' });
      // reset form
      setFirstName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setMessage('');
      setPrivacy(false);
      setNewsletter(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message.';
      setResult({ ok: false, msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Contact Text */}
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">{t('contactTitle')}</h2>
            <p className="text-gray-700 mb-6">{t('contactDesc')}</p>

            {/* Contact Person Info */}
            <div className="mt-12 flex items-start">
              <div>
                <h3 className="text-xl font-bold">Norgon Berisha</h3>
                <p className="text-gray-600 mb-4">{t('salesDirector')}</p>

                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-red-600 fill-current">
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 152c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C280 162.7 269.3 152 256 152zM296 352h-80C202.8 352 192 341.3 192 328c0-13.25 10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 192 224 192h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 352 296 352z"/>
                    </svg>
                  </div>
                  <span>{t('swiss')}</span>
                </div>

                <p className="text-gray-700 mb-1">AlphaTech Systemes SA</p>
                <p className="text-gray-700 mb-4">Chemin des Vernes 5,1180 Rolle, Switzerland</p>

                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                      <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    {phoneNumbers.map((num, idx) => (
                      <a
                        key={idx}
                        href={`tel:${String(num).replace(/\s+/g, '')}`}
                        className="text-red-600 hover:underline"
                        aria-label={`Call ${num}`}
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </div>
                  <a href="#" className="text-red-600 hover:underline">{t('viewLinkedIn')}</a>
                </div>

                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                      <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
                    </svg>
                  </div>
                  <a href="#" className="text-red-600 hover:underline">{t('sendEmail')}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('firstName')}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder={t('emailAddress')}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder={t('phoneNumber')}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                </div>
                <div>
                  <select
                    className="w-full p-3 border border-gray-300 rounded appearance-none bg-white"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">{t('swiss')}</option>
                    <option value="france">{t('france')}</option>
                    <option value="germany">{t('germany')}</option>
                    <option value="other">{t('other')}</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder={t('yourMessage')}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="text-red-600 text-sm">{t('requiredFields')}</div>

              <div className="pt-2">
                <p className="text-sm font-medium mb-2">{t('dataProtection')}</p>
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    id="privacy"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    required
                  />
                  <label htmlFor="privacy" className="text-sm">
                    {t('privacyPolicy')} <a href="#" className="text-red-600 hover:underline">privacy policy</a>.
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    id="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                  />
                  <label htmlFor="newsletter" className="text-sm">{t('newsletter')}</label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 font-medium uppercase hover:bg-red-700 transition-colors disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? (t('sending') || 'Sending...') : t('sendMessage')}
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
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
