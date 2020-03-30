import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from '../public/locales/en/translation.json';
import translationDE from '../public/locales/de/translation.json';
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE
  }
};

i18n
.use(detector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources,
  lng: localStorage.getItem('lang') || "en",
  whitelist: ['de', 'en'],
  fallbackLng: "en", // use en if detected lng is not available
  debug: true,

  keySeparator: false, // we do not use keys in form messages.welcome
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  react: {
    useSuspense: false,
    wait: true,
  },
});

export default i18n;