import { Box } from "@mui/material";
import { AudioPlayer } from "react-audio-play";

export default function Audio() {
  const volume = 50;
  const src = "/bautizo/audio/mi_julietita.mp3";
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBottom="24px"
    >
      <AudioPlayer preload="none" width="90%" volume={volume} src={src} />
    </Box>
  );
}
