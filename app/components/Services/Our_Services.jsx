"use client";
import { FaBullhorn, FaPencilAlt, FaPalette, FaChartLine, FaLaptopCode, FaDesktop, FaLayerGroup } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Our_Services() {
  const { t } = useTranslation();

  const services = t('services_section.services', { returnObjects: true });

  const serviceIcons = {
    "Content Design": FaPencilAlt,
    "Graphic Design": FaPalette,
    "Digital Marketing": FaChartLine,
    "UI/UX Design": FaDesktop,
    "Web Development": FaLaptopCode,
    "Visual Identity": FaLayerGroup
  };

  return (
    <div className="py-10 px-2 md:px-10 bg-gradient-to-br from-black via-gray-800 to-black min-h-screen">
      <h2 className={`text-4xl md:text-6xl font-extrabold text-center mb-12 text-white ${
        t('dir') === 'rtl' ? 'font-arabic' : ''
      }`}>
        {t('services_section.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => {
          const Icon = serviceIcons[service.title] || FaBullhorn;
          return (
            <div
              key={idx}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 border border-gray-700 ${
                t('dir') === 'rtl' ? 'text-right' : 'text-left'
              }`}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full p-4 mb-4 shadow-lg">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}