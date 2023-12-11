import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";

import LanguageSelector from "./components/LanguageSelector";
import Date from "./components/Date";
// import Hero from "./components/Hero";

countries.registerLocale(enLocale);
countries.registerLocale(esLocale);

export default function App() {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t("title")}</h2>
      <LanguageSelector />
      <Date />
    </Container>
  );
}
