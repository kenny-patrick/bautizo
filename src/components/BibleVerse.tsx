import { Box, Typography } from "@mui/material";

export default function BibleVerse() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      paddingBottom="24px"
    >
      <Typography>"Versiculo de la Biblia"</Typography>
      <Typography>Genesis 1:1</Typography>
      <Typography paddingTop="12px">
        Acompañamos a celebrar este día tan especial donde la luz de Dios se
        encenderá en nuestro corazón para iluminar todo el camino de nuestra
        vida.
      </Typography>
    </Box>
  );
}
