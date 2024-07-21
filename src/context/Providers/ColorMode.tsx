// Imports
import { APP_CONSTANTS } from "../../utils/constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useMemo, useState, createContext, useContext } from "react";

// Types
type ColorMode = "light" | "dark";
type Props = {
  children?: React.ReactNode;
};

// Create color mode context
const ColorModeContext = createContext({ toggle: () => {} });

const lightTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4E8397",
    },
    secondary: {
      main: "#845EC2",
    },
    warning: {
      main: "#FFB703",
    },
    // background: {
    //   default: "#FFFFFF",
    // },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        // root: ({ theme }) => ({
        // "&.Mui-selected": {
        //   "&:hover": {
        //     backgroundColor: theme.palette.primary.main,
        //   },
        //   backgroundColor: theme.palette.primary.main,
        //   color: theme.palette.background.paper,
        //   ".MuiListItemIcon-root": {
        //     color: theme.palette.background.paper,
        //   },
        // },
        // }),
      },
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#2f4f4f",
    },
    secondary: {
      main: "#845EC2",
    },
    warning: {
      main: "#FFB703",
    },
  },
});

/**
 * Provides color mode context to children
 */
export default function ColorModeProvider({ children }: Props) {
  // Local State
  const [mode, setMode] = useState<ColorMode>(
    window.localStorage?.colorMode || APP_CONSTANTS.DEFAULT_THEME
  );

  // MUI Theme
  const theme = useMemo(() => {
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  // Current color mode
  const colorMode = useMemo(
    () => ({
      toggle: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

/**
 * Hook that returns the Provider's value in a functional component
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);
