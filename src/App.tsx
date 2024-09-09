import { Container, ThemeProvider, createTheme } from "@mui/material";

import Date from "./components/Date";
// import NavBar from "./components/NavBar";
import Photos from "./components/Photos";
// import Location from "./components/Location";
import Parents from "./components/Parents";
import Intro from "./components/Intro";
import Timer from "./components/Timer";
import BibleVerse from "./components/BibleVerse";
// import Message from "./components/Message";
// import TopBorder from "./components/TopBorder";
// import BottomBorder from "./components/BottomBorder";
import Audio from "./components/Audio";

export default function App() {
  const mainText = "#d4af37";
  const bodyText = "#4d4637";

  const customFontTheme = createTheme({
    palette: {
      primary: {
        light: "#b3aa99",
        main: "#4d4637",
        dark: "#ba000d",
        contrastText: "white"
      },
      secondary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff"
      }
    },
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      body1: {
        color: bodyText
      },
      subtitle1: {
        color: bodyText
      },
      subtitle2: {
        color: bodyText
      },
      h4: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: mainText
      },
      h5: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: mainText
      },
      h6: {
        fontFamily: ["Norican", "serif"].join(","),
        fontWeight: 600,
        color: mainText
      },
      button: {
        fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
        fontWeight: 600
      }
    }
  });

  return (
    <Container maxWidth="sm" sx={{ paddingBottom: "36px" }}>
      {/* <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="12px"
        paddingBottom="48px"
        gap="24px"
        px={{ xs: 1, sm: 16, md: 32, lg: 48 }}
        // sx={{ bgcolor: "#b3aa99"  }}
      > */}
      <ThemeProvider theme={customFontTheme}>
        <Intro />
        <Audio />
        <BibleVerse />
        <Parents />
        <Date />
        <Timer />
        <Photos />
        {/* <Message /> */}
      </ThemeProvider>
      {/* </Box> */}
    </Container>
  );
}
