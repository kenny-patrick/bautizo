import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5">{t("timelineHeader")}</Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap="24px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/6pm_ceremony_blue.jpeg"
          />
          <Typography>6:00 PM</Typography>
          <Typography>{t("timelineCeremony")}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/745pm_reception_blue.jpeg"
          />
          <Typography>7:45 PM</Typography>
          <Typography>{t("timelineReception")}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/8pm_dance_blue.jpeg"
          />
          <Typography>8:00 PM</Typography>
          <Typography>{t("timelineDance")}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/845pm_toast_blue.jpeg"
          />
          <Typography>8:45 PM</Typography>
          <Typography>{t("timelineToast")}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/9pm_dinner_blue.jpeg"
          />
          <Typography>9:00 PM</Typography>
          <Typography>{t("timelineDinner")}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            sx={{ width: "70px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/3am_end_blue.jpeg"
          />
          <Typography>3:00 AM</Typography>
          <Typography>{t("timelineEnd")}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
