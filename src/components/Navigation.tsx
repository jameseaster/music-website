// Imports
import { Box } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useAppState } from "../context/Providers/AppState";
// Icons
import HomeIcon from "@mui/icons-material/ChairOutlined";
import VideoIcon from "@mui/icons-material/LiveTvOutlined";
import ContactIcon from "@mui/icons-material/EmailOutlined";
import MusicIcon from "@mui/icons-material/HeadphonesOutlined";
import PhotosIcon from "@mui/icons-material/PhotoCameraOutlined";

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
                ? `1px solid ${theme.palette.primary.main}`
                : `none`,
          }}
        >
          <Tooltip
            enterDelay={500}
            TransitionComponent={Zoom}
            title={<Typography variant="body2">{action.name}</Typography>}
          >
            <IconButton
              size="large"
              disableTouchRipple
              onClick={() => handleSelect(index)}
            >
              {action.icon}
            </IconButton>
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
}
