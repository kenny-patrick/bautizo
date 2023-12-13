import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{t("title")}</Typography>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
