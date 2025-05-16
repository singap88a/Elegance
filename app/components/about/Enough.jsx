"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Enough() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gradient-to-bl from-black via-gray-800 to-gray-900">
      <div
        className="w-[90vw] max-w-7xl rounded-[2.5rem] bg-[#454545] relative overflow-hidden flex flex-col items-center py-16 px-4"
        style={{
          backgroundImage: "url('https://raya.smartbrand-dev.com/images/About/ContactUsAbout/bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text */}
        <h2 className={`relative text-white text-4xl md:text-6xl font-normal text-center font-[Titillium Web] z-10 ${
          t('dir') === 'rtl' ? 'font-arabic' : ''
        }`}>
          {t('enough_section.title')}
        </h2>
        {/* Button */}
        <button className={`relative mt-8 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-[Titillium Web] px-8 py-3 rounded-full transition z-10 ${
          t('dir') === 'rtl' ? 'font-arabic' : ''
        }`}>
          {t('enough_section.button_text')}
        </button>
      </div>
    </div>
  );
}