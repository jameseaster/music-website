// Imports
import { Box } from "@mui/material";
import Navigation from "./Navigation";
import ColorModeButton from "./ColorModeButton";
import Typography from "@mui/material/Typography";

// Types
export interface LayoutProps {
  children?: React.ReactNode;
  onTabSelect: (selectedTabText: number) => void;
}

/**
 * App layout with responsive drawer, header, and content
 */
export default function Layout(props: LayoutProps) {
  // Props
  const { children, onTabSelect } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          my: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant={"h6"}
          sx={{
            mb: 1,
            textAlign: "center",
            fontWeight: "light",
            letterSpacing: "0.5rem",
          }}
        >
          JAMES EASTER
        </Typography>
        <Navigation onTabSelect={onTabSelect} />
      </Box>
      {children}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ColorModeButton />
      </Box>
    </Box>
  );
}
