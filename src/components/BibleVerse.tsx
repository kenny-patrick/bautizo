import { Box, Typography } from "@mui/material";

export default function BibleVerse() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography>"Versiculo de la Biblia"</Typography>
        <Typography>Genesis 1:1</Typography>
      </Box>
      <Box
        component="img"
        sx={{ width: "96px" }}
        alt="Image of two lovebirds"
        src="/bautizo/img/birds_blue.jpeg"
      />
    </Box>
  );
}
