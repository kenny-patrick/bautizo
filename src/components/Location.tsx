import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();
  const mapsUrl = "https://maps.app.goo.gl/6xRniWFUR7vAYqhZ8";

  return (
    <Box>
      <Typography variant="h4">{t("locationHeader")}</Typography>
      <Card sx={{ maxWidth: "400px", textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5">Salón & Jardín Las Flores</Typography>
          <Typography variant="subtitle1">
            Boulevard Las Bugambilias #801
          </Typography>
          <Typography variant="subtitle1">
            Fraccionamiento Las Flores
          </Typography>
          <Typography variant="subtitle1">
            Comitán de Domínguez, Chiapas, México
          </Typography>
          <Button
            onClick={() => {
              const newWindow = window.open(
                mapsUrl,
                "_blank",
                "noopener,noreferrer",
              );
              if (newWindow) newWindow.opener = null;
            }}
            variant="contained"
            sx={{ marginTop: "12px" }}
          >
            {t("mapButton")}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
