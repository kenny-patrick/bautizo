import { Box } from "@mui/material";
import { AudioPlayer } from "react-audio-play";

export default function Audio() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <AudioPlayer width="80%" src="/wedding/audio/brillas.mp3" />
    </Box>
  );
}
