import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme
} from "@mui/material";
import Countdown, { CountdownRendererFn } from "react-countdown";

export default function Timer() {
  const mainText = "#d4af37";
  const countdownTheme = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h3: {
        color: "#4d4637"
      },
      h4: {
        fontFamily: ["Playfair Display Variable", "serif"].join(","),
        fontweight: 600,
        fontSize: "24px"
      },
      h5: {
        fontFamily: ["Norican", "sans-serif"].join(","),
        fontWeight: 600,
        color: mainText
      }
    }
  });

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      return <span>¡Listo!</span>;
    } else {
      const daysStr = days === 1 ? "Dia" : "Dias";
      const hoursStr = hours === 1 ? "Hora" : "Horas";
      const minutesStr = minutes === 1 ? "Minuto" : "Minutos";
      const secondsStr = seconds === 1 ? "Segundo" : "Segundos";
      return (
        <Box display="flex" gap="12px">
          <Stack alignItems="center">
            <Typography variant="h3">{days}</Typography>
            <Typography variant="subtitle2">{daysStr}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{hours}</Typography>
            <Typography variant="subtitle2">{hoursStr}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{minutes}</Typography>
            <Typography variant="subtitle2">{minutesStr}</Typography>
          </Stack>
          <Typography variant="h3"> : </Typography>
          <Stack alignItems="center">
            <Typography variant="h3">{seconds}</Typography>
            <Typography variant="subtitle2">{secondsStr}</Typography>
          </Stack>
        </Box>
      );
    }
  };
  const date = Date.parse("28 Sep 2024 15:00:00 UTC");
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ThemeProvider theme={countdownTheme}>
        <Typography variant="h5">Faltan...</Typography>
        <Countdown date={date} renderer={renderer} />
      </ThemeProvider>
    </Box>
  );
}
