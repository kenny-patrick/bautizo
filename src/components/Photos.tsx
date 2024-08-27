import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import slides from "../data/slides";

export default function Photos() {
  const [index, setIndex] = useState(-1);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" alignSelf="center">
        Fotos
      </Typography>
      <Typography variant="subtitle1" alignSelf="center">
        Haz clic para expandir las fotos
      </Typography>
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
