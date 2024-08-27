import { Box } from "@mui/material";

export default function BottomBorder() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="-100px"
      paddingTop="24px"
    >
      <Box
        sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "900px" } }}
        component="img"
        alt="Floral Top Border"
        src="/bautizo/img/bottom_border1.png"
      />
    </Box>
  );
}
