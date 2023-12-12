import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";

import Date from "./components/Date";
import NavBar from "./components/NavBar";
import Photos from "./components/Photos";
import Location from "./components/Location";

import { Box } from "@mui/material";

countries.registerLocale(enLocale);
countries.registerLocale(esLocale);

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: "12px" }}
      >
        <Date />
        <Location />
        <Photos />
      </Box>
    </div>
  );
}
