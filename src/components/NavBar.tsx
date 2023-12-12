import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{t("title")}</Typography>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
