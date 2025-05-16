'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop',
  ];

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-900 py-12 md:py-16">
      <div className="w-[95vw] md:w-[90vw] min-h-[70vh] bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 relative gap-10 md:gap-8 shadow-2xl">
        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto order-1 md:order-1">
          <div className="space-y-6">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Oswald'] text-center md:text-left">
              {t('gallery.title', 'Our Gallery')}
            </h2>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light font-['Oswald'] max-w-2xl text-center md:text-left leading-relaxed">
              {t('gallery.description')}
            </p>
          </div>
        </div>
        
        {/* Slider Section */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto order-2 md:order-2">
          <div className="w-[300px] sm:w-[360px] h-[400px] sm:h-[480px] transform hover:scale-105 transition-transform duration-300">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper h-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt={t('gallery.image_alt', { number: idx+1 })}
                    width={360}
                    height={480}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;