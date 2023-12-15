import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DressCode() {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" alignSelf="flex-start">
        {t("dressCodeHeader")}
      </Typography>

      <Typography>{t("dressCodeBody")}</Typography>

      <Box display="flex" paddingTop="12px">
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a dress"
          src="/wedding/img/dress.png"
        />
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a man wearing a suit"
          src="/wedding/img/suit.png"
        />
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a men's formal shirt"
          src="/wedding/img/shirt.png"
        />
      </Box>
    </Box>
  );
}
