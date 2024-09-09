import { Box, Grid, Typography } from "@mui/material";

export default function BibleVerse() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      paddingBottom="24px"
    >
      <Typography>
        "Que mi hijo Te siga a Ti, Dios, y Te tema y guarde Tus mandamientos y
        escuche Tu voz. Que él Te Sirva y sea fiel a Ti."
      </Typography>
      <Typography>Deuteronomio 13:4</Typography>
      <Grid item xs={6} md={6} marginTop="12px">
        <Grid item xs={12} md={12}>
          <img
            src="/bautizo/img/dove.png"
            alt="Event Image"
            style={{ maxWidth: "25%", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Typography marginTop="12px">
        "Acompáñanos a celebrar este día tan especial donde la luz de Dios se
        encenderá en nuestro corazón para iluminar todo el camino de nuestra
        vida."
      </Typography>
    </Box>
  );
}
