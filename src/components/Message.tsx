import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Message() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography>{t("bibleText")}</Typography>
      <Typography>{t("bibleVerse")}</Typography>
    </Box>
  );
}
