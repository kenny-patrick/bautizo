import { Box, Typography } from "@mui/material";

export default function DressCode() {

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5">"Dress Code Header"</Typography>
      <Typography>"Dress code body"</Typography>
      <Box display="flex" paddingTop="12px">
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a dress"
          src="/wedding/img/dress.png"
        />
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a man wearing a suit"
          src="/wedding/img/suit.png"
        />
        <Box
          component="img"
          sx={{ width: "96px" }}
          alt="Image of a men's formal shirt"
          src="/wedding/img/dressed_man.jpeg"
        />
      </Box>
    </Box>
  );
}
