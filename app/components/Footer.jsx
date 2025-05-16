"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import logo from "../../public/logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  // Navigation links
  const pages = [
    { text: t('footer.pages.home'), href: "#" },
    { text: t('footer.pages.about'), href: "#" },
    { text: t('footer.pages.services'), href: "#" },
    { text: t('footer.pages.work'), href: "#" },
    { text: t('footer.pages.contact'), href: "#" },
  ];
  
  // Tool pages
  const toolPages = [
    { text: t('footer.tools.pricing'), href: "#" },
    { text: t('footer.tools.privacy'), href: "#" },
  ];
  
  // Social icons
  const icons = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        {/* Main columns */}
        <div className={`flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 ${
          t('dir') === 'rtl' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Logo and description */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
              <Image src={logo} alt="" 
              width={100}
              height={100}
              className="mx-auto md:mx-0"
             />
            <p className="text-gray-300 max-w-xs text-center md:text-left mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 mt-2">
              {icons.map((icon, idx) => (
                <a 
                  key={idx} 
                  href={icon.href} 
                  className="text-2xl hover:text-yellow-400 transition-colors"
                  aria-label={t('footer.social_icons')}
                >
                  <icon.icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* Site pages */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
            <button 
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-between w-full md:w-auto font-bold text-yellow-400 text-xl mb-2"
            >
              {t('footer.pages_title')}
              <span className="md:hidden ml-2">
                {isPagesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul className={`space-y-2 w-full md:w-auto ${isPagesOpen ? 'block' : 'hidden md:block'}`}>
              {pages.map((link, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href={link.href} className="hover:text-yellow-400 transition-colors text-lg">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tool pages */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
            <button 
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-center justify-between w-full md:w-auto font-bold text-yellow-400 text-xl mb-2"
            >
              {t('footer.tools_title')}
              <span className="md:hidden ml-2">
                {isToolsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul className={`space-y-2 w-full md:w-auto ${isToolsOpen ? 'block' : 'hidden md:block'}`}>
              {toolPages.map((link, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href={link.href} className="hover:text-yellow-400 transition-colors text-lg">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subscription */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="font-bold text-yellow-400 text-xl mb-2 text-center md:text-left">
              {t('footer.subscribe_title')}
            </div>
            <form className={`flex w-full max-w-xs rounded-full overflow-hidden border-2 border-yellow-400 bg-[#090c12] ${
              t('dir') === 'rtl' ? 'flex-row-reverse' : ''
            }`}>
              <button 
                type="submit" 
                className="bg-yellow-400 text-black px-6 py-3 font-semibold focus:outline-none hover:bg-yellow-500 transition-colors"
              >
                {t('footer.subscribe_button')}
              </button>
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')} 
                className="flex-1 px-4 py-3 bg-transparent text-white focus:outline-none placeholder:text-gray-400" 
              />
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Bottom row */}
        <div className={`flex flex-col md:flex-row justify-between items-center text-gray-300 text-lg gap-6 ${
          t('dir') === 'rtl' ? 'md:flex-row-reverse' : ''
        }`}>
          <div className={`text-center md:${t('dir') === 'rtl' ? 'text-right' : 'text-left'}`}>
            <span className="font-bold text-yellow-400">{t('footer.contact_title')}</span><br />
            <span className="text-base">{t('footer.phone_number')}</span>
          </div>
          <div className="text-center text-base">{t('footer.copyright')}</div>
          <div className={`text-center md:${t('dir') === 'rtl' ? 'text-right' : 'text-left'}`}>
            <span className="font-bold text-yellow-400">{t('footer.address_title')}</span><br />
            <span className="text-base">{t('footer.address')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;