'use client';
import { useTranslation } from 'react-i18next';

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://raya.smartbrand-dev.com/fontSelectionSection/mm2.png')",
      }}
    >
      {/* Overlay with gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/30 to-gray-900"></div>
      {/* Content with improved responsiveness */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 ${
        t('dir') === 'rtl' ? 'text-right' : 'text-left'
      }`}>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          {t('about_hero.title')}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          {t('about_hero.description')}
        </p>
      </div>
    </div>
  );
}