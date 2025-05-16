'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function LatestWork() {
  const { t } = useTranslation();

  const workItems = [
    {
      id: 1,
      title: t('latest_work.items.0.title'),
      description: t('latest_work.items.0.description'),
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: t('latest_work.items.1.title'),
      description: t('latest_work.items.1.description'),
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
   
{
  id: 3,
  title: t('latest_work.items.2.title'),
  description: t('latest_work.items.2.description'),
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
},
    {
      id: 4,
      title: t('latest_work.items.3.title'),
      description: t('latest_work.items.3.description'),
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="mx-auto bg-gradient-to-bl from-yellow-600 via-gray-900 to-gray-900 py-12 px-4 sm:px-6 md:px-40">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        {t('latest_work.title')}
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center mb-8">
        <button className={`bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center w-full md:w-auto text-[20px] ${
          t('dir') === 'rtl' ? 'flex-row-reverse' : ''
        }`}>
          {t('latest_work.button_text')}
          <span className={`${t('dir') === 'rtl' ? 'mr-3' : 'ml-3'} transition-transform duration-300 group-hover:translate-x-1`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={t('dir') === 'rtl' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {workItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:-translate-y-3 border border-white/20 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className={`font-bold text-2xl mb-3 text-white transform transition-all duration-500 group-hover:translate-y-[-5px] ${t('dir') === 'rtl' ? 'text-right' : 'text-left'}`}>{item.title}</h3>
              <p className={`text-gray-200/90 leading-relaxed transform transition-all duration-500 group-hover:translate-y-[-5px] ${t('dir') === 'rtl' ? 'text-right' : 'text-left'}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}