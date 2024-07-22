// Imports
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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
    <Box sx={{ m: 3 }}>
      <IconButton
        sx={{
          boxShadow:
            mode === "dark"
              ? `0px 3px 5px -1px rgba(0, 0, 0, 0.7),
          0px 6px 10px 0px rgba(0, 0, 0, 0.82),
          0px 1px 18px 0px rgba(0, 0, 0, 0.8)`
              : `0px 3px 5px -1px rgba(0, 0, 0, 0.2),
           0px 6px 10px 0px rgba(0, 0, 0, 0.14),
           0px 1px 18px 0px rgba(0, 0, 0, 0.12)`,
        }}
        size="small"
        onClick={toggleColor}
      >
        {mode === "light" ? (
          <LightModeTwoToneIcon fontSize={"medium"} />
        ) : (
          <DarkModeTwoToneIcon fontSize={"medium"} />
        )}
      </IconButton>
    </Box>
  );
}
