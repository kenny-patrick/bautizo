import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Location from "./components/Location";
import LanguageSelector from "./components/LanguageSelector";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  const { t } = useTranslation();

  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div className="container">
        <div>
          <Link style={padding} to="/">
            {t("home")}
          </Link>
          <Link style={padding} to="/location">
            {t("location")}
          </Link>
        </div>
        <h2>{t("title")}</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <LanguageSelector />
      </div>
    </Router>
  );
}

export default App;
