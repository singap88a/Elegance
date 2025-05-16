'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Bannar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[300px] bg-[url('https://raya.smartbrand-dev.com/fontSelectionSection/mm2.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
        <h1 className={`text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg ${
          t('dir') === 'rtl' ? 'font-arabic' : ''
        }`}>
          {t('banner.title')}
        </h1>
      </div>
    </div>
  );
};

export default Bannar;