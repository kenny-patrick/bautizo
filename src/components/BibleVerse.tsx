import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function BibleVerse() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>{t("bibleText")}</Typography>
        <Typography>{t("bibleVerse")}</Typography>
      </Box>
      <Box
        component="img"
        sx={{ width: "96px" }}
        alt="Image of two lovebirds"
        src="/wedding/img/birds_blue.jpeg"
      />
    </Box>
  );
}
