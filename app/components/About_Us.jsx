"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import about from "../../public/home/about.webp";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Text Content */}
        <div 
          className={`flex flex-col justify-center text-white space-y-12 ${
            t("dir") === "rtl" ? "text-right" : "text-left"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-6xl font-serif font-bold mb-8 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text relative">
              {t("about_us.title")}
              <span className="absolute bottom-0 left-0 w-[25%] h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              {t("about_us.description1")}
            </p>
          </div>
          <div className="flex space-x-16 mt-8">
            <div className="  transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">20+</div>
              <div className="text-gray-400 text-lg mt-2">
                {t("about_us.years_experience")}
              </div>
            </div>
            <div className="  transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">600+</div>
              <div className="text-gray-400 text-lg mt-2">
                {t("about_us.projects_completed")}
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-gray-300">
              {t("about_us.description2")}
            </p>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="flex items-center justify-center relative group">
          <div className=" "></div>
          <Image
            src={about}
            alt={t("about_us.image_alt")}
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform   duration-500"
          />
        </div>
      </div>
    </div>
  );
}