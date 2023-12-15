import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Children() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h4">{t("childrenHeader")}</Typography>
      <Typography>{t("childrenBody")}</Typography>
    </Box>
  );
}
