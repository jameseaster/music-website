// Imports
import { Box } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { SxProps, useTheme } from "@mui/system";
import { APP_CONSTANTS } from "../utils/constants";

// Types
export interface VideoPlayerProps {
  sx?: SxProps;
  url: string;
}

/**
 * Streams YouTube Videos with url
 */
export default function VideoPlayer(props: VideoPlayerProps) {
  const { sx, url } = props;

  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "320px", sm: "592px", md: "640px" },
        height: { xs: "180px", sm: "333px", md: "360px" },
        ...sx,
      }}
    >
      <ReactPlayer
        controls
        url={url}
        width="100%"
        height="100%"
        style={{
          top: 0,
          left: 0,
          overflow: "hidden",
          borderRadius: "20px",
          position: "absolute",
          boxShadow: APP_CONSTANTS.BOX_SHADOW,
          border: `0.5px solid ${theme.palette.text.secondary}`,
        }}
      />
    </Box>
  );
}
