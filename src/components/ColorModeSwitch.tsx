import { useState } from "react";
import Radio from "@mui/material/Radio";
import { useTheme } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = (event.target as HTMLInputElement).value;
    if (newMode === "dark" || newMode === "light") {
      setMode(newMode);
      colorMode.toggle();
    }
  };

  return (
    <FormControl>
      <RadioGroup row value={mode} onChange={handleChange}>
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
  );
}
