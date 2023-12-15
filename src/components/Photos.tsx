import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import slides from "../data/slides";

export default function Photos() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <Box>
      <Typography variant="h4">{t("photosHeader")}</Typography>
      <Typography variant="subtitle1">{t("photosBody")}</Typography>
      <Box maxWidth="800px">
        <PhotoAlbum
          layout="columns"
          photos={slides}
          targetRowHeight={200}
          rowConstraints={{ maxPhotos: 4 }}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </Box>
    </Box>
  );
}
