import { Box, Grid, Typography } from "@mui/material";

export default function Parents() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingBottom="24px">
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6">Padres</Typography>
          <Typography variant="body1">Carlos Alberto Aguilar Diaz</Typography>
          <Typography variant="body1">Karina Solorzano Ramos</Typography>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6">Padrinos</Typography>
          <Typography>Sr. Enrique García Gordillo</Typography>
          <Typography marginBottom="12px">
            Sra. María Amparo Solorzano Ramos
          </Typography>
          <Typography>Sr. Pedro Aguilar Santiz</Typography>
          <Typography>Sra. María del Socorro Solorzano Ramos</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
