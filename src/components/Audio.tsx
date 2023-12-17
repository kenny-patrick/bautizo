import { Box } from "@mui/material";
import { AudioPlayer } from "react-audio-play";

export default function Audio() {
  const volume = 50;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <AudioPlayer
        preload="none"
        width="80%"
        volume={volume}
        src="/wedding/audio/brillas.mp3"
      />
    </Box>
  );
}
