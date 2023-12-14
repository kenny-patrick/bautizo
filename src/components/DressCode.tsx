import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DressCode() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h4">{t("dressCodeHeader")}</Typography>
      <Typography>{t("dressCodeBody")}</Typography>
    </Box>
  );
}
