import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Children() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h5">{t("childrenHeader")}</Typography>
      <Typography>{t("childrenBody")}</Typography>
    </Box>
  );
}
