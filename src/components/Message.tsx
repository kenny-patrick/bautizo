import { Box, Typography } from "@mui/material";

export default function Message() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      gap="12px"
    >
      <Box
        component="img"
        sx={{ maxWidth: "50%" }}
        alt="Logo with A & E initials"
        src="/bautizo/img/logo.png"
        marginBottom="-36px"
      />
      <Typography variant="h5">¡Te esperamos!</Typography>
    </Box>
  );
}
