import { AddToCalendarButton } from "add-to-calendar-button-react";

import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

export default function Date() {
  const { t, i18n } = useTranslation();
  const language: any = i18n.language;

  return (
    <Box>
      <Typography variant="h4">{t("dateHeader")}</Typography>
      <Typography variant="body1">{t("dateText")}</Typography>
      <AddToCalendarButton
        name={t("title")}
        location="LAS FLORES SALON Y JARDIN, Boulevard Las Bugambilias, Fraccionamiento Las Flores 801, El Herraje, 30019 Comitán de Domínguez, Chis., Mexico"
        startDate="2024-03-02"
        endDate="2024-03-03"
        startTime="18:00"
        endTime="04:00"
        timeZone="America/Mexico_City"
        options={[
          "Apple",
          "Google",
          "iCal",
          "Microsoft365",
          "Outlook.com",
          "Yahoo",
        ]}
        listStyle="modal"
        language={language}
        hideBranding
      ></AddToCalendarButton>
    </Box>
  );
}
