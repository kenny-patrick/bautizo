// import { AddToCalendarButton } from "add-to-calendar-button-react";

import { Box, Grid, Typography } from "@mui/material";

export default function Date() {
  return (
    <Box sx={{ flexGrow: 1 }} textAlign="center">
      <Typography variant="h5">Fecha del evento</Typography>
      <Typography variant="body1">28 de septiembre del 2024</Typography>
      <Grid container spacing={2} paddingTop="12px" paddingBottom="12px">
        <Grid item xs={6} md={6}>
          <Grid item xs={12} md={12}>
            <img
              src="/bautizo/img/church.png"
              alt="Event Image"
              style={{ maxWidth: "50%", height: "auto" }}
            />
          </Grid>
          <Typography variant="h5">MISA</Typography>
          <Typography variant="body1">
            Iglesia de Ranchería Laguna Larga
          </Typography>
          <Typography variant="body1" style={{ fontSize: "24px" }}>
            9 am
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid item xs={12} md={12}>
            <img
              src="/bautizo/img/balloons.png"
              alt="Event Image"
              style={{ maxWidth: "50%", height: "auto" }}
            />
          </Grid>
          <Typography variant="h5">RECEPCION</Typography>
          <Typography variant="body1">
            Casa del Sr. Manuel Aguilar Espinosa
          </Typography>
          <Typography variant="body1" style={{ fontSize: "24px" }}>
            2 pm
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
