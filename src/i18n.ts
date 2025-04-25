import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/en.json";
import enContact from "./locales/en/contact.json";
import nl from "./locales/nl/nl.json";
import nlContact from "./locales/nl/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en,
        contact: enContact,
      },
      nl: {
        common: nl,
        contact: nlContact,
      },
    },
    fallbackLng: "nl",
    ns: ["common", "contact"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

export default i18n;
