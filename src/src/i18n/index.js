import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCALS } from "./constants";
import { en } from "./copies/en";
import { uk } from "./copies/uk";

const resources = {
  en: {
    translation: en 
  },
  uk: {
    translation: uk
  }
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.uk, 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;