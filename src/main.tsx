import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "yet-another-react-lightbox/styles.css";
import "@fontsource/norican";
import "@fontsource-variable/playfair-display";
// Supports weights 300-800
import "@fontsource-variable/open-sans";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <CssBaseline />
      <App />
    </Suspense>
  </React.StrictMode>
);
