'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Banner = () => {
  const { t } = useTranslation();
  const isRTL = t('dir') === 'rtl';

  return (
    <div
      className={`relative w-full flex flex-col-reverse md:flex-row gap-10 ${
        isRTL ? 'md:flex-row-reverse' : ''
      } items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden`}
    >
      {/* Gradient Animation Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-gradient-rotate bg-[conic-gradient(from_0deg,transparent_0%,rgba(168,85,247,0.1)_20%,transparent_80%)] opacity-30"></div>
      </div>

      {/* Left: Text Content */}
      <div
        className={`w-full md:w-1/2 text-gray-100 space-y-8 ${
          isRTL ? 'text-right md:pr-12' : 'text-left md:pl-12'
        }`}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]"
        >
          {t('banner.title')}
        </h1>

        <div className="space-y-5 text-lg sm:text-xl text-gray-300">
          {[1, 2, 3].map((num) => (
            <p
              key={num}
              className={`relative ${
                isRTL ? 'pr-10' : 'pl-10'
              } transition duration-300 group hover:text-white`}
            >
              <span
                className={`absolute top-1.5 w-4 h-4 rounded-full bg-yellow-400/70 group-hover:bg-yellow-400 transition-all duration-300 ${
                  isRTL ? 'right-0' : 'left-0'
                }`}
              >
                <span className="absolute w-2 h-2 rounded-full bg-gray-900 top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </span>
              {t(`banner.paragraph${num}`)}
            </p>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl group">
          <Image
            src="https://raya.smartbrand-dev.com/contentss/aboutUs1.png"
            alt={t('banner.image_alt')}
            fill
            className="object-cover rounded-[40px] transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/5 to-transparent backdrop-blur-[2px] rounded-[40px] group-hover:backdrop-blur-[4px] transition-all duration-700"></div>
          <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-[36px] group-hover:border-yellow-400/40 transition-all duration-700 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-[36px] shadow-[inset_0_0_60px_rgba(234,179,8,0.3)] group-hover:shadow-[inset_0_0_80px_rgba(234,179,8,0.4)] transition-all duration-700 pointer-events-none"></div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 20s linear infinite;
        }

        .animate-text-shimmer {
          animation: text-shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
