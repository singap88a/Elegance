"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import { useEffect, useState } from 'react';

export function ClientProviders({ children }) {
  const [dir, setDir] = useState('ltr');
  const [lang, setLang] = useState(i18n.language || 'en');

  useEffect(() => {
    // Set initial language
    const initialLang = i18n.language || 'en';
    i18n.changeLanguage(initialLang);
    
    // Set initial direction
    const initialDir = initialLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = initialDir;
    document.documentElement.lang = initialLang;
    setDir(initialDir);
    setLang(initialLang);
    
    const handleLanguageChanged = (lng) => {
      const newDir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = newDir;
      document.documentElement.lang = lng;
      setDir(newDir);
      setLang(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}