import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useSnackbar, SnackbarAction } from "notistack";

// Types
type SnackType = "default" | "success" | "error" | "warning" | "info";

/**
 * Returns functions to generate and close snack notifications
 */
export const useSnacks = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Add close action to an individual snackbar
  const action = (snackbarId: string) => (
    <IconButton
      size="small"
      component="label"
      sx={{ color: "white" }}
      onClick={() => closeSnackbar(snackbarId)}
    >
      <CloseIcon />
    </IconButton>
  );

  // Generates snack
  const makeSnack = (type: SnackType, message: string, hideAfter = 3000) => {
    return enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: hideAfter,
      action: action as SnackbarAction,
      style: { whiteSpace: "pre-line" },
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });
  };

  // Handles success or error messages
  const handleSnack = ({
    success,
    info,
    warning,
    error,
    timing,
  }: {
    success?: string;
    info?: string;
    warning?: string;
    error?: string;
    timing?: number;
  }) => {
    if (success) makeSnack("success", success, timing || 3000);
    else if (info) makeSnack("info", info, timing || 6000);
    else if (warning) makeSnack("warning", warning, timing || 6000);
    else if (error) makeSnack("error", error, timing || 6000);
  };

  return { makeSnack, handleSnack };
};
