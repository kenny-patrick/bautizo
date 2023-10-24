import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      test: "Hello",
      title: "Wedding of Kenny and Yuri",
      home: "Home",
      location: "Location",
    },
  },
  es: {
    translation: {
      test: "Hola",
      title: "Boda de Kenny y Yuri",
      home: "Inicio",
      location: "Ubicación",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
