import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

export default function Intro() {
  const ourWeddingFont = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontWeight: 600
      }
    }
  });

  const namesFont = createTheme({
    typography: {
      fontFamily: ["Norican", "sans-serif"].join(","),
      h2: {
        color: "skyblue"
      }
    }
  });

  return (
    <Box
      paddingTop="24px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <ThemeProvider theme={ourWeddingFont}>
        <Typography variant="h4">Mi Bautizo</Typography>
      </ThemeProvider>

      <ThemeProvider theme={namesFont}>
        <Typography variant="h2">Angelica</Typography>
        <Typography variant="h2">&</Typography>
        <Typography variant="h2">Edith</Typography>
      </ThemeProvider>

      <Box
        component="img"
        paddingTop="12px"
        sx={{ width: "350px" }}
        alt="Photo with car in Comitan park"
        src="/bautizo/img/_DSC7349ALPE copia.jpg"
      />
    </Box>
  );
}
