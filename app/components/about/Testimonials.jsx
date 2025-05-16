"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.0.name"),
      title: t("testimonials.0.title"),
      image: "https://raya.smartbrand-dev.com/about/OutTeamAbout/person.png",
      description: t("testimonials.0.description"),
    },
    {
      name: t("testimonials.1.name"),
      title: t("testimonials.1.title"),
      image: "https://raya.smartbrand-dev.com/about/OutTeamAbout/person.png",
      description: t("testimonials.1.description"),
    },
    {
      name: t("testimonials.2.name"),
      title: t("testimonials.2.title"),
      image: "https://raya.smartbrand-dev.com/about/OutTeamAbout/person.png",
      description: t("testimonials.2.description"),
    },
    {
      name: t("testimonials.2.name"),
      title: t("testimonials.2.title"),
      image: "https://raya.smartbrand-dev.com/about/OutTeamAbout/person.png",
      description: t("testimonials.2.description"),
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto  ">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {t("testimonials.title")}
        </h2>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          dir={t("dir")}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center my-5 border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-yellow-500 mx-2 ${
                  t("dir") === "rtl" ? "text-right" : "text-left"
                }`}
              >
                <div className="relative mb-6 group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500/30 group-hover:border-yellow-500 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-500/20 transition-all duration-300 animate-ping-once" />
                </div>
                
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {item.name}
                </h3>
                <p className="text-yellow-300 font-medium mb-3">{item.title}</p>
                
                <div className="relative mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-500 opacity-20 absolute -top-6 -left-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 italic px-4">
                    {item.description}
                  </p>
                  <svg
                    className="w-8 h-8 text-yellow-500 opacity-20 absolute -bottom-6 -right-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <div className="flex gap-5 justify-center mt-auto">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 text-xl transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-500 text-xl transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-300 text-xl transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style jsx global>{`
        @keyframes ping-once {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping-once {
          animation: ping-once 1s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}