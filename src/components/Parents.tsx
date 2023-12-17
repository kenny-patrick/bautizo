import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Parents() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography>{t("blessing")}</Typography>
      <Typography variant="h6" paddingTop="24px">
        {t("groomParents")}
      </Typography>
      <Typography>Brian William Patrick</Typography>
      <Typography>Veronica Sauceda de la Fuente</Typography>
      <Typography variant="h6">{t("brideParents")}</Typography>
      <Typography>Manuel Aguilar Espinosa</Typography>
      <Typography>Roselia Díaz Aguilar</Typography>
    </Box>
  );
}
