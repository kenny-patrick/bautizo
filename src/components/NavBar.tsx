import { AppBar, Box, Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="fixed" sx={{ background: "#eeeeee" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "8px",
            paddingBottom: "8px"
          }}
        >
          <Box
            component="img"
            sx={{ width: "45px" }}
            alt="Logo with K & E initials without wedding date"
            src="/bautizo/img/logo-nodate.png"
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
