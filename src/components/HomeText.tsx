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
      <AnimatedTrail open={open} endHeight={105}>
        <Typography
          color="primary"
          variant="h1"
          sx={{ letterSpacing: "-0.03em" }}
        >
          James
        </Typography>
        <Typography
          variant="h1"
          color="primary"
          sx={{ letterSpacing: "-0.03em" }}
        >
          Easter
        </Typography>
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "-0.03em",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[700]
                : "white",
          }}
        >
          Music
        </Typography>
      </AnimatedTrail>
    </Box>
  );
}
