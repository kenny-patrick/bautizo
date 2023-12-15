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
        color: "skyblue",
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
        sx={{ width: "200px" }}
        alt="Logo with K & E initials with wedding date"
        src="/wedding/img/4.png"
      />
    </Box>
  );
}
