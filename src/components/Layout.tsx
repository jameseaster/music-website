// Imports
import { Box } from "@mui/material";
import SpeedDialMenu from "./SpeedDialMenu";

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
      {children}
      {/* Nav Menu */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <SpeedDialMenu onTabSelect={onTabSelect} />
      </Box>
    </Box>
  );
}
