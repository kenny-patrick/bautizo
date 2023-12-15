import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Message() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="12px">
      <Box
        component="img"
        sx={{ width: "100px" }}
        alt="Blue logo with K & E initials without wedding date"
        src="/wedding/img/logo_nodate_blue.png"
      />
      <Typography>{t("finalMessage")}</Typography>
      <Typography variant="h4">{t("goodbye")}</Typography>
    </Box>
  );
}
