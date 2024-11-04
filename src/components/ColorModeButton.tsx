// Imports
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useColorMode } from "../context/Providers/ColorMode";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

// Types
export interface ColorModeButtonProps {
  onTabSelect: (selectedTabText: number) => void;
}

/**
 * ColorModeButton toggles between light and dark mode
 */
export default function ColorModeButton() {
  // Styles
  const theme = useTheme();

  // Local State
  const [mode, setMode] = useState(theme.palette.mode);

  // Hooks
  const colorMode = useColorMode();

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
    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
      <LightModeTwoToneIcon
        fontSize="small"
        color={theme.palette.mode === "light" ? "primary" : undefined}
      />
      <Switch size="small" onClick={toggleColor} />
      <DarkModeTwoToneIcon
        fontSize="small"
        color={theme.palette.mode === "light" ? undefined : "primary"}
      />
    </Stack>
  );
}
