// Imports
import { Box } from "@mui/material";
import AnimatedTrail from "./AnimatedTrail";
import Typography from "@mui/material/Typography";

/**
 * Text for the home screen
 */
export default function HomeText() {
  return (
    <Box
      sx={{
        mb: 4,
        p: { xs: 2, sm: 4 },
        borderRadius: "20px",
        border: (theme) => `0.5px solid ${theme.palette.text.secondary}`,
      }}
    >
      <AnimatedTrail open={true} endHeight={105}>
        <Typography
          variant="h1"
          color="primary"
          sx={{ letterSpacing: "0.07em" }}
        >
          James
        </Typography>
        <Typography
          variant="h1"
          color="primary"
          sx={{ letterSpacing: "0.07em" }}
        >
          Easter
        </Typography>
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "0.07em",
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
