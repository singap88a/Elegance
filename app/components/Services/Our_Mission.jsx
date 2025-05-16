"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Team_Members_1 from "../../../public/Mission/Team_Members_1.webp";
import Team_Members_2 from "../../../public/Mission/Team_Members_2.webp";
import Team_Members_3 from "../../../public/Mission/Team_Members_3.webp";
import Team_Members_4 from "../../../public/Mission/Team_Members_4.webp";
import Team_Members_5 from "../../../public/Mission/Team_Members_5.webp";
import Our_Mission_1 from "../../../public/Mission/Our_Mission_1.webp";
import Our_Mission_2 from "../../../public/Mission/Our_Mission_2.webp";
 const Our_Mission = () => {
  const { t } = useTranslation();

  const teamMembers = [
    Team_Members_1,
    Team_Members_2,
    Team_Members_3,
    Team_Members_4,
    Team_Members_5,
  ];

  const features = [
    t('mission.features.0'),
    t('mission.features.1'),
    t('mission.features.2'),
    t('mission.features.3'),
    t('mission.features.4'),
    t('mission.features.5')
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-4 md:px-16 pt-40">
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center ${
        t('dir') === 'rtl' ? 'md:flex-row-reverse' : ''
      }`}>
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8 items-center md:items-start">
          {/* Team Image */}
          <Image
            src={Our_Mission_1}
            alt={t('mission.team_image_alt')}
            width={256}
            height={288}
            className="rounded-xl w-64 h-72 object-cover mb-4 shadow-lg"
          />
          {/* Team Members */}
          <div className={`bg-white text-black rounded-2xl px-6 py-4 shadow flex flex-col items-center w-fit mx-auto md:mx-0 ${
            t('dir') === 'rtl' ? 'text-right' : 'text-left'
          }`}>
            <span className="font-bold text-lg mb-2">{t('mission.team_title')}</span>
            <div className="flex -space-x-3">
              {teamMembers.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={t('mission.member_alt')}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className={`flex gap-8 mt-8 w-full justify-center md:justify-start ${
            t('dir') === 'rtl' ? 'flex-row-reverse' : ''
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold">5K</div>
              <div className="text-sm text-gray-300">{t('mission.clients')}</div>
            </div>
            <div className="border-l border-gray-600 h-10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">95+</div>
              <div className="text-sm text-gray-300">{t('mission.projects')}</div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className={`flex-1 flex flex-col items-center md:items-start ${
          t('dir') === 'rtl' ? 'md:text-right' : 'md:text-left'
        }`}>
          <div className={`w-full flex ${t('dir') === 'rtl' ? 'justify-start' : 'justify-end'}`}>
            <span className="text-yellow-400 font-bold text-xl mb-2">
              {t('mission.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center md:text-left">
            {t('mission.title')}
          </h2>
          <p className="text-gray-300 mb-6 text-center md:text-left">
            {t('mission.description')}
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 w-full">
            {features.map((feature, idx) => (
              <Feature key={idx} text={feature} dir={t('dir')} />
            ))}
          </div>
          {/* Office Image */}
          <Image
            src={Our_Mission_2}
            alt={t('mission.office_image_alt')}
            width={256}
            height={192}
            className="rounded-xl w-64 h-48 object-cover mt-8 shadow-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ text, dir }) => {
  return (
    <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
      <span>{text}</span>
      <span className="text-yellow-400 text-lg">ⓘ</span>
    </div>
  );
};

export default Our_Mission;