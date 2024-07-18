import Backdrop from "@mui/material/Backdrop";
import { useAppState } from "../context/Providers/AppState";
import CircularProgress from "@mui/material/CircularProgress";

/**
 * Backdrop with loading spinner contained in the middle to show global loading state
 */
export default function LoadingOverlay() {
  // Global State
  const [appState] = useAppState();

  return (
    <Backdrop
      open={appState.showLoadingOverlay}
      sx={{
        color: "#FFFFFF",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
