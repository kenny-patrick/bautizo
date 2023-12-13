import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language]);

  // const handleLanguageChange = (event: SelectChangeEvent) => {
  //   setLanguage(event.target.value as string);
  //   i18n.changeLanguage(event.target.value as string);
  // };
  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string,
  ) => {
    if (newLanguage != null) {
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    // <FormControl sx={{ m: 1, minWidth: 130 }}>
    //   <InputLabel id="language-select-label">Idioma/Language</InputLabel>
    //   <Select
    //     labelId="language-select-label"
    //     id="language-select"
    //     value={language}
    //     label="Idioma/Language"
    //     autoWidth
    //     onChange={handleLanguageChange}
    //   >
    //     <MenuItem value={"en"}>🇺🇸 English</MenuItem>
    //     <MenuItem value={"es"}>🇲🇽 Español</MenuItem>
    //   </Select>
    // </FormControl>
    <Stack direction="column">
      {/* <Typography variant="subtitle2">Idioma/Language:</Typography> */}
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
      >
        <ToggleButton value="en">🇺🇸 En</ToggleButton>
        <ToggleButton value="es">🇲🇽 Es</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
