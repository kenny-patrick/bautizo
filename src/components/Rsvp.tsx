import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Rsvp() {
  const { t, i18n } = useTranslation();

  const buttonClick = () => {
    let url = "";
    console.log(i18n.language);
    if (i18n.language.includes("en")) {
      url = "https://forms.gle/B5LUGgo9FeBHLJT9A";
    } else {
      url = "https://forms.gle/opwRR8dzdPxJG8vU7";
    }
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h5">{t("rsvpHeader")}</Typography>
      <Typography>{t("rsvpBody")}</Typography>
      <Button onClick={buttonClick} variant="contained">
        {t("rsvpButton")}
      </Button>
    </Box>
  );
}
