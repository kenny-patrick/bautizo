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
        <Typography>"Something about donkey genitals"</Typography>
        <Typography>Ezekiel 23:20</Typography>
      </Box>
      <Box
        component="img"
        sx={{ width: "96px" }}
        alt="Image of two lovebirds"
        src="/wedding/img/birds_blue.jpeg"
      />
    </Box>
  );
}
