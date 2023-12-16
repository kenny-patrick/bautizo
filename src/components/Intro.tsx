import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Photo: 7349 7225
export default function Intro() {
  const { t } = useTranslation();

  const ourWeddingFont = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontWeight: 600,
      },
    },
  });

  const namesFont = createTheme({
    typography: {
      fontFamily: ["Norican", "sans-serif"].join(","),
      h2: {
        color: "skyblue",
      },
    },
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
        <Typography variant="h4">{t("ourWedding")}</Typography>
      </ThemeProvider>

      <ThemeProvider theme={namesFont}>
        <Typography variant="h2">Kenny</Typography>
        <Typography variant="h2">&</Typography>
        <Typography variant="h2">Elizabeth</Typography>
      </ThemeProvider>

      <Box
        component="img"
        paddingTop="12px"
        sx={{ width: "350px" }}
        alt="Photo with car in Comitan park"
        src="/wedding/img/_DSC7349ALPE copia.jpg"
      />
    </Box>
  );
}
