// Imports
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAppState } from "../context/Providers/AppState";

// Icons
import HomeIcon from "@mui/icons-material/ChairTwoTone";
import VideoIcon from "@mui/icons-material/LiveTvTwoTone";
import ContactIcon from "@mui/icons-material/EmailTwoTone";
import MusicIcon from "@mui/icons-material/HeadphonesTwoTone";
import PhotosIcon from "@mui/icons-material/PhotoCameraTwoTone";

// Types
export interface NavigationProps {
  onTabSelect: (selectedTabText: number) => void;
}

// Navigation options for drawer
const navItems = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Music", icon: <MusicIcon /> },
  { name: "Videos", icon: <VideoIcon /> },
  { name: "Photos", icon: <PhotosIcon /> },
  { name: "Contact", icon: <ContactIcon /> },
];

/**
 * Navigation menu items
 */
export default function Navigation(props: NavigationProps) {
  // Props
  const { onTabSelect } = props;

  // Global State
  const [{ activeTabIndex }] = useAppState();

  // Select page for navigation
  const handleSelect = (index: number) => {
    onTabSelect(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {navItems.map((action, index) => (
        <Box
          key={action.name}
          sx={{
            mx: { xs: 0.5, sm: 2 },
            transition: "border-bottom .75s",
            borderBottom: (theme) =>
              activeTabIndex === index
                ? `1px solid ${theme.palette.text.primary}`
                : `1px solid ${theme.palette.background.paper}`,
          }}
        >
          <IconButton
            size="large"
            disableTouchRipple
            onClick={() => handleSelect(index)}
          >
            {action.icon}
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}
