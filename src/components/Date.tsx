// import { AddToCalendarButton } from "add-to-calendar-button-react";

import { Box, Typography } from "@mui/material";

export default function Date() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h5">Fecha del evento</Typography>
      <Typography variant="body1">28 de septiembre del 2024</Typography>
      <Typography variant="h5">MISA</Typography>
      <Typography variant="body1">Iglesia de Ranchería Laguna Larga</Typography>
      <Typography variant="h5">RECEPCION</Typography>
      <Typography variant="body1">
        Casa del Sr. Manuel Aguilar Espinosa
      </Typography>
      {/* <AddToCalendarButton
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
      ></AddToCalendarButton> */}
    </Box>
  );
}
