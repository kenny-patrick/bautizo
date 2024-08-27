// import { AddToCalendarButton } from "add-to-calendar-button-react";

import { Box, Typography } from "@mui/material";

export default function Date() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h5">Fecha del evento</Typography>
      <Typography variant="body1">28 de septiembre de 2024</Typography>
      <Typography variant="body1">
        La misa será en la iglesia de Ranchería Laguna Larga
      </Typography>
      <Typography variant="body1">
        Y la celebración en casa del Sr. Manuel Aguilar Espinoza
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
