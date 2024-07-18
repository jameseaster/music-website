// Imports
import { useState } from "react";
import { Box } from "@mui/material";
import NavDrawer from "./NavDrawer";
import MobileHeader from "./MobileHeader";
import Toolbar from "@mui/material/Toolbar";

// Types
export interface LayoutProps {
  selectedIndex: number;
  children?: React.ReactNode;
  tabs: { text: string; icon: JSX.Element }[];
  onTabSelect: (selectedTabText: number) => void;
}

/**
 * App layout with responsive drawer, header, and content
 */
export default function Layout(props: LayoutProps) {
  // Props
  const { tabs, selectedIndex, onTabSelect, children } = props;

  // Local State
  const [openDrawer, setOpenDrawer] = useState(false);

  // Toggle mobile drawer visibility
  const toggleDrawer = () => setOpenDrawer((state) => !state);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <MobileHeader toggleDrawer={toggleDrawer} />

      {/* Drawer */}
      <NavDrawer
        tabs={tabs}
        openDrawer={openDrawer}
        onTabSelect={onTabSelect}
        selectedIndex={selectedIndex}
        setOpenDrawer={setOpenDrawer}
      />

      {/* Content */}
      <Box
        component="main"
        sx={{ p: 3, flexGrow: 1, bgcolor: "background.default" }}
      >
        <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
        {children}
      </Box>
    </Box>
  );
}
