'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CONTACTS = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
          t('dir') === 'rtl' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Contact Info Section */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className={`flex items-center ${t('dir') === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div className={`${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                    <h3 className="text-gray-300 font-medium">{t('contact.phone_title')}</h3>
                    <p className="text-white font-semibold text-lg">+123 456 7890</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className={`flex items-center ${t('dir') === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <FaEnvelope className="text-purple-400 text-xl" />
                  </div>
                  <div className={`${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                    <h3 className="text-gray-300 font-medium">{t('contact.email_title')}</h3>
                    <p className="text-white font-semibold text-lg">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 md:col-span-2">
                <div className={`flex items-center ${t('dir') === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <FaMapMarkerAlt className="text-green-400 text-xl" />
                  </div>
                  <div className={`${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                    <h3 className="text-gray-300 font-medium">{t('contact.location_title')}</h3>
                    <p className="text-white font-semibold text-lg">{t('contact.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section - Mobile */}
            <div className="md:hidden rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17729938.99941873!2d13.710336269116075!3d32.03479020842516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1747159081961!5m2!1sar!2seg" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.map_title')}
              />
            </div>

            {/* Map Section - Desktop */}
            <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17729938.99941873!2d13.710336269116075!3d32.03479020842516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1747159081961!5m2!1sar!2seg" 
                width="100%" 
                height="455" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.map_title')}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700/50">
            <h2 className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ${
              t('dir') === 'rtl' ? 'font-arabic' : ''
            }`}>
              {t('contact.form_title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-gray-300 mb-2 ${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                  {t('contact.name_label')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 ${
                      t('dir') === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'
                    }`}
                    placeholder={t('contact.name_placeholder')}
                    required
                    dir={t('dir')}
                  />
                  <div className={`absolute inset-y-0 ${t('dir') === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium text-gray-300 mb-2 ${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                  {t('contact.phone_label')}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 ${
                      t('dir') === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'
                    }`}
                    placeholder={t('contact.phone_placeholder')}
                    required
                    dir={t('dir')}
                  />
                  <div className={`absolute inset-y-0 ${t('dir') === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-gray-300 mb-2 ${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                  {t('contact.email_label')}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 ${
                      t('dir') === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'
                    }`}
                    placeholder={t('contact.email_placeholder')}
                    required
                    dir={t('dir')}
                  />
                  <div className={`absolute inset-y-0 ${t('dir') === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-gray-300 mb-2 ${t('dir') === 'rtl' ? 'text-right' : ''}`}>
                  {t('contact.message_label')}
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-200 ${
                      t('dir') === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'
                    }`}
                    placeholder={t('contact.message_placeholder')}
                    required
                    dir={t('dir')}
                  ></textarea>
                  <div className={`absolute inset-y-0 ${t('dir') === 'rtl' ? 'right-0 pr-3 pt-3' : 'left-0 pl-3 pt-3'} flex items-start pointer-events-none`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center ${
                    t('dir') === 'rtl' ? 'font-arabic space-x-reverse' : 'space-x-2'
                  }`}
                  dir={t('dir')}
                >
                  <span>{t('contact.submit_button')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONTACTS;