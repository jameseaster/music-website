// Imports
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoadingOverlay from "./LoadingOverlay";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

// Types
interface MobileHeaderProps {
  toggleDrawer: () => void;
}

/**
 * Header for navigation in mobile view
 */
export default function MobileHeader(props: MobileHeaderProps) {
  const { toggleDrawer } = props;

  // Style
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        display: { xs: "block", md: "none" },
        zIndex: (theme) => theme.zIndex.drawer - 1,
      }}
    >
      <LoadingOverlay />
      <Toolbar sx={{ pl: 0, pr: 0, justifyContent: "flex-end" }}>
        <IconButton
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2, color: theme.palette.background.paper }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
