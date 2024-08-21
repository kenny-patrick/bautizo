import { Box, ThemeProvider, createTheme } from "@mui/material";

import Date from "./components/Date";
import NavBar from "./components/NavBar";
import Photos from "./components/Photos";
import Location from "./components/Location";
import Parents from "./components/Parents";
import Intro from "./components/Intro";
import DressCode from "./components/DressCode";
import Rsvp from "./components/Rsvp";
import Timer from "./components/Timer";
import Timeline from "./components/Timeline";
import BibleVerse from "./components/BibleVerse";
import Message from "./components/Message";
import TopBorder from "./components/TopBorder";
import BottomBorder from "./components/BottomBorder";
import Audio from "./components/Audio";

export default function App() {
  const customFontTheme = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: "skyblue"
      },
      h5: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: "skyblue"
      },
      h6: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: "skyblue"
      },
      button: {
        fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
        fontWeight: 600
      }
    }
  });

  return (
    <div>
      <NavBar></NavBar>
      <TopBorder />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="12px"
        paddingBottom="48px"
        gap="24px"
        px={{ xs: 1, sm: 16, md: 32, lg: 48 }}
      >
        <ThemeProvider theme={customFontTheme}>
          <Intro />
          <Audio />
          <BibleVerse />
          <Parents />
          <Timer />
          <Date />
          <DressCode />
          <Timeline />
          <Location />
          <Photos />
          <Rsvp />
          <Message />
        </ThemeProvider>
      </Box>
      <BottomBorder />
    </div>
  );
}
