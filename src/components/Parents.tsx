import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Parents() {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h6">{t("groomParents")}</Typography>
      <Typography variant="subtitle2">Brian Patrick</Typography>
      <Typography variant="subtitle2">Veronica Sauceda de la Fuente</Typography>
      <Typography variant="h6">{t("brideParents")}</Typography>
      <Typography variant="subtitle2">Manuel Aguilar Espinosa</Typography>
      <Typography variant="subtitle2">Roselia Díaz Aguilar</Typography>
    </Box>
  );
}
