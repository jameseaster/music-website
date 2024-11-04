// Imports
import { Box } from "@mui/material";
import Navigation from "./Navigation";
import LoadingOverlay from "./LoadingOverlay";
import ColorModeButton from "./ColorModeButton";

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
    <>
      <LoadingOverlay />
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
            mt: 3,
            display: "flex",
            mb: { xs: 0, sm: 3 },
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Navigation onTabSelect={onTabSelect} />
        </Box>
        {children}
        <Box
          sx={{
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ColorModeButton />
        </Box>
      </Box>
    </>
  );
}
