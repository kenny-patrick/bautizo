import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { useTranslation } from "react-i18next";

export default function Timer() {
  const { t } = useTranslation();

  const countdownTheme = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontFamily: ["Playfair Display Variable", "serif"].join(","),
        fontweight: 600,
      },
      h5: {
        fontFamily: ["Norican", "sans-serif"].join(","),
        fontWeight: 600,
        color: "skyblue",
      },
    },
  });

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <span>{t("countdownComplete")}</span>;
    } else {
      const daysStr = days === 1 ? "daysSingular" : "daysPlural";
      const hoursStr = hours === 1 ? "hoursSingular" : "hoursPlural";
      const minutesStr = minutes === 1 ? "minutesSingular" : "minutesPlural";
      const secondsStr = seconds === 1 ? "secondsSingular" : "secondsPlural";
      return (
        <Box display="flex" gap="12px">
          <Stack alignItems="center">
            <Typography variant="h3">{days}</Typography>
            <Typography variant="subtitle2">{t(daysStr)}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{hours}</Typography>
            <Typography variant="subtitle2">{t(hoursStr)}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{minutes}</Typography>
            <Typography variant="subtitle2">{t(minutesStr)}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{seconds}</Typography>
            <Typography variant="subtitle2">{t(secondsStr)}</Typography>
          </Stack>
        </Box>
      );
    }
  };
  const date = Date.parse("03 Mar 2024 00:00:00 GMT");
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ThemeProvider theme={countdownTheme}>
        <Typography paddingBottom="24px" variant="h4">
          "{t("date")}"
        </Typography>
        <Typography variant="h5">{t("timerHeader")}</Typography>
        <Countdown date={date} renderer={renderer} />
      </ThemeProvider>
    </Box>
  );
}
