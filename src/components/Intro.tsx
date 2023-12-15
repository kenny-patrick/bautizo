import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Photo: 7349 7225
export default function Intro() {
  const { t } = useTranslation();
  return (
    <Box
      marginTop="24px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4">{t("ourWedding")}</Typography>
      <Typography variant="h4">Kenny</Typography>
      <Typography>&</Typography>
      <Typography variant="h4">Elizabeth</Typography>
      <Box
        component="img"
        sx={{ width: "200px" }}
        alt="Logo with K & E initials with wedding date"
        src="/wedding/img/4.png"
      />
    </Box>
  );
}
