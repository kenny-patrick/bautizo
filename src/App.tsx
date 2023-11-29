import { useTranslation } from "react-i18next";

import LanguageSelector from "./components/LanguageSelector";
// import Hero from "./components/Hero";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t("title")}</h2>
      <LanguageSelector />
    </div>
  );
}

export default App;
