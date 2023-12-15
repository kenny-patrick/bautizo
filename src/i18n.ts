import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "es",
    detection: {
      // order: ["path", "localStorage", "htmlTag", "cookie"],
      order: ["querystring", "navigator"],
      // caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/wedding/locales/{{lng}}/translation.json`,
    },
  });

export default i18n;
