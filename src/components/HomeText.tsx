// Imports
import { useState } from "react";
import { Box } from "@mui/material";
import AnimatedTrail from "./AnimatedTrail";
import Typography from "@mui/material/Typography";

/**
 * Text for the home screen
 */
export default function HomeText() {
  // Local State
  const [open, set] = useState(true);

  return (
    <Box
      sx={{ display: "flex", height: "100%" }}
      onClick={() => set((state) => !state)}
    >
      <AnimatedTrail open={open}>
        <Typography color="primary" variant="h1">
          James
        </Typography>
        <Typography color="primary" variant="h1">
          Easter
        </Typography>
        <Typography variant="h1">Music</Typography>
      </AnimatedTrail>
    </Box>
  );
}
