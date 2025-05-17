import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('../../public/locales/en/common.json')
      },
      ar: {
        translation: require('../../public/locales/ar/common.json')
      }
    }
  });

export default i18n;