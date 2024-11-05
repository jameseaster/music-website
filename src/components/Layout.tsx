// Imports
import { Box } from "@mui/material";
import Navigation from "./Navigation";
import LoadingOverlay from "./LoadingOverlay";

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
        minHeight: "100vh",
        flexDirection: "column",
        background: (theme) =>
          theme.palette.mode === "light"
            ? "radial-gradient(#ffe1d4, #ffffff)"
            : "radial-gradient(#494949, #000)",
      }}
    >
      <LoadingOverlay />
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Navigation onTabSelect={onTabSelect} />
      </Box>
      {children}
    </Box>
  );
}
