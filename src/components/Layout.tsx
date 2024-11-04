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
    <>
      <LoadingOverlay />
      <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Navigation onTabSelect={onTabSelect} />
        </Box>
        {children}
      </Box>
    </>
  );
}
