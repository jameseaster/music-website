// Imports
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeProvider from "./Providers/ColorMode";
import { AppStateProvider } from "./Providers/AppState";

// Types
interface GlobalStateWrapperProps {
  children: React.ReactNode;
}

// Wraps app with global state providers
export default function GlobalStateWrapper(props: GlobalStateWrapperProps) {
  const { children } = props;
  return (
    <SnackbarProvider maxSnack={3}>
      <AppStateProvider>
        <ColorModeProvider>
          <CssBaseline />
          {children}
        </ColorModeProvider>
      </AppStateProvider>
    </SnackbarProvider>
  );
}
