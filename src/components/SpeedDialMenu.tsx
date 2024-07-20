// Imports
import { useState } from "react";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useColorMode } from "../context/Providers/ColorMode";

// Icons
import HomeIcon from "@mui/icons-material/ChairTwoTone";
import VideoIcon from "@mui/icons-material/LiveTvTwoTone";
import ContactIcon from "@mui/icons-material/EmailTwoTone";
import MusicIcon from "@mui/icons-material/HeadphonesTwoTone";
import PhotosIcon from "@mui/icons-material/PhotoCameraTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

// Types
export interface SpeedDialMenuProps {
  onTabSelect: (selectedTabText: number) => void;
}

// Navigation options for drawer
const navItems = [
  { name: "Contact", icon: <ContactIcon /> },
  { name: "Photos", icon: <PhotosIcon /> },
  { name: "Videos", icon: <VideoIcon /> },
  { name: "Music", icon: <MusicIcon /> },
  { name: "Home", icon: <HomeIcon /> },
];

/**
 * Navigation menu items
 */
export default function SpeedDialMenu(props: SpeedDialMenuProps) {
  // Props
  const { onTabSelect } = props;

  // Styles
  const theme = useTheme();

  // Hooks
  const colorMode = useColorMode();

  // Local State
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(theme.palette.mode);

  // Select page for navigation
  const handleSelect = (index: number) => {
    onTabSelect(index);
    setOpen(false);
  };

  // Change color mode
  const toggleColor = () => {
    if (mode === "dark") {
      setMode("light");
      window.localStorage.setItem("colorMode", "light");
    } else if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("colorMode", "dark");
    }
    colorMode.toggle();
  };

  return (
    <SpeedDial
      open={open}
      direction={"up"}
      icon={<MenuIcon />}
      ariaLabel="SpeedDial Menu"
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      <SpeedDialAction
        tooltipOpen
        icon={
          mode === "light" ? (
            <LightModeTwoToneIcon
              fontSize={"medium"}
              sx={{ color: (theme) => theme.palette.text.primary }}
            />
          ) : (
            <DarkModeTwoToneIcon
              fontSize={"medium"}
              sx={{ color: (theme) => theme.palette.text.primary }}
            />
          )
        }
        onClick={toggleColor}
        tooltipTitle={"Mode"}
      />
      {navItems.map((action, index) => (
        <SpeedDialAction
          tooltipOpen
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleSelect(index)}
        />
      ))}
    </SpeedDial>
  );
}
