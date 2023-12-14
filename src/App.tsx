import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";

import Date from "./components/Date";
import NavBar from "./components/NavBar";
import Photos from "./components/Photos";
import Location from "./components/Location";
import Parents from "./components/Parents";

import { Box } from "@mui/material";
import Intro from "./components/Intro";
import DressCode from "./components/DressCode";

countries.registerLocale(enLocale);
countries.registerLocale(esLocale);

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Intro />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="12px"
        px={{ xs: 1, sm: 16, md: 32, lg: 48 }}
      >
        <Date />
        <Parents />
        <Location />
        <DressCode />
        <Photos />
      </Box>
    </div>
  );
}
