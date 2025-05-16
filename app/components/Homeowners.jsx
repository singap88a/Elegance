'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Homeowners() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-yellow-600 py-12 px-4 sm:px-6 md:px-8">
      {/* Blur/Glow خلف البطاقة */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-yellow-400 opacity-30 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-gray-700 opacity-20 rounded-full blur-2xl" />
      </div>
      <div
        className={`relative z-10 flex flex-col md:flex-row bg-gradient-to-br from-black/80 via-gray-900/80 to-yellow-500/20 backdrop-blur-md rounded-2xl overflow-hidden max-w-6xl w-full shadow-2xl border border-gray-800/40 ${
          t('dir') === 'rtl' ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 min-h-[350px]">
          <Image
            src="https://raya.smartbrand-dev.com/contentss/aboutUs2.png"
            alt={t('homeowners.image_alt')}
            width={800}
            height={600}
            className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition duration-500"
          />
        </div>
        {/* Text and Button Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-14 py-10 md:py-16 text-white gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg bg-gradient-to-r from-yellow-400 via-white to-yellow-500 bg-clip-text text-transparent text-left">
            {t('homeowners.title')}
          </h2>
          <p className="text-lg md:text-xl mb-4 text-left text-gray-100/90 drop-shadow-md">
            {t('homeowners.description')}
          </p>
          <button className="mt-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all px-8 py-3 rounded-xl text-black font-bold shadow-xl border-2 border-yellow-300/60 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            {t('homeowners.button_text')}
          </button>
        </div>
      </div>
    </div>
  );
}