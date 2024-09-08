import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

export default function Intro() {
  const ourWeddingFont = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontWeight: 600,
        color: "#4d4637"
      }
    }
  });

  const mainText = "#d4af37";
  const namesFont = createTheme({
    typography: {
      fontFamily: ["Norican", "sans-serif"].join(","),
      h2: {
        color: mainText
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
      paddingBottom="24px"
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
        sx={{ maxWidth: { xs: 350, md: 500 } }}
        alt="Angelica & Edith"
        src="/bautizo/img/thumbnail/071A6494.jpg"
      />
    </Box>
  );
}
