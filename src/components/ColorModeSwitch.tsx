// Imports
import { useState } from "react";
import { useTheme } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItemButton from "@mui/material/ListItemButton";
import { useColorMode } from "../context/Providers/ColorMode";

/**
 * Icon Button to toggle between light and dark theme
 */
export default function ColorModeSwitch() {
  // Styles
  const theme = useTheme();

  // Local state
  const [mode, setMode] = useState(theme.palette.mode);

  // Hooks
  const colorMode = useColorMode();

  // Change color mode
  const handleChange = () => {
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
    <ListItem>
      <ListItemButton sx={{ borderRadius: 12 }} onClick={handleChange}>
        <ListItemIcon>
          {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText primary={"Color Mode"} />
      </ListItemButton>
    </ListItem>
  );
}
