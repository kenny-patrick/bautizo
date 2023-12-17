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
        sx={{ width: "100%" }}
        component="img"
        alt="Floral Top Border"
        src="/wedding/img/bottom_border1.png"
      />
    </Box>
  );
}
