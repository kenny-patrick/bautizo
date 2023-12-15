import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language) {
      setLanguage(i18n.language.substring(0, 2));
    }
  }, [i18n]);

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string,
  ) => {
    if (newLanguage != null) {
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
      console.log(`Language change: ${newLanguage}`);
    }
  };

  return (
    <Stack direction="column">
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
      >
        <ToggleButton value={"en"}>🇺🇸 En</ToggleButton>
        <ToggleButton value={"es"}>🇲🇽 Es</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
