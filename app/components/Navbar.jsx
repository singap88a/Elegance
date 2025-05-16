"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../public/logo.png"; // Adjust the path to your logo image

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const links = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.about"), href: "/pages/about" },
    { name: t("navbar.goals"), href: "/pages/services" },
    { name: t("navbar.courses"), href: "/pages/ourWork" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50  ">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4 gap-4">
          <div className="text-xl font-bold text-[#facc15]">
            <Image src={logo} alt="Logo" width={80} height={50} />
            {/* <span className="text-2xl font-extrabold">LOGO</span> */}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Toggle Button */}
            <div className="flex">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-black px-4 py-1 rounded-full transition-all duration-300"
              >
                <FaGlobe />
                <span className="text-lg font-bold">
                  {i18n.language === "en" ? "ع" : "E"}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#facc15] focus:outline-none hover:text-white transition-colors duration-300"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`font-semibold text-lg transition-colors duration-300 relative group ${
                      pathname === link.href
                        ? "text-[#facc15]"
                        : "text-white hover:text-[#facc15]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#facc15] transition-all duration-300 ${
                        pathname === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/pages/contact"
              className="rounded-full px-6 py-2 border-2 border-[#facc15] bg-transparent text-[#facc15] hover:bg-[#facc15] hover:text-white transition-all duration-300 font-bold shadow-lg shadow-[#facc15]/20"
            >
              {t("navbar.contact")}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/90 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-gradient-to-b from-black to-gray-900 w-full h-auto max-h-[90vh] p-8 rounded-b-2xl transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-bold text-[#facc15]">LOGO</div>
              <button
                onClick={toggleMenu}
                className="text-[#facc15] focus:outline-none hover:text-white transition-colors duration-300"
              >
                <FaTimes size={28} />
              </button>
            </div>

            {/* Language Toggle in Mobile Menu */}
            <div className="flex justify-center mb-8">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full transition-all duration-300"
              >
                <FaGlobe size={18} />
                <span className="text-lg font-bold">
                  {i18n.language === "en" ? "العربية" : "English"}
                </span>
              </button>
            </div>

            <ul className="space-y-8 mb-8">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`block font-semibold text-xl transition-colors duration-300 py-2 border-b ${
                      pathname === link.href
                        ? "text-[#facc15] border-[#facc15]"
                        : "text-white hover:text-[#facc15] border-[#facc15]/20"
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/pages/contact"
                className="block text-center rounded-full px-6 py-3 border-2 border-[#facc15] bg-transparent text-[#facc15] hover:bg-[#facc15] hover:text-white transition-all duration-300 font-bold shadow-lg shadow-[#facc15]/30"
                onClick={toggleMenu}
              >
                {t("navbar.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
