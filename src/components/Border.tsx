import { Box } from "@mui/material";

interface BorderProps {
  imgSrc: string;
}

export default function Border({ imgSrc }: BorderProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "900px"
          }
        }}
        component="img"
        alt="Floral Top Border"
        src={imgSrc}
      />
    </Box>
  );
}
