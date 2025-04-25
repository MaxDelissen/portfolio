import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import nl from "./locales/nl.json";

i18n
  .use(LanguageDetector) // Detect system language
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources: {
      en: { translation: en },
      nl: { translation: nl },
    },
    fallbackLng: "nl", // Default language
    interpolation: { escapeValue: false },
  });

export default i18n;
