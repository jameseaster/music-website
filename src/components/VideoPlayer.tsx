// Imports
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import ReactPlayer from "react-player/lazy";

// Types
export interface VideoPlayerProps {
  sx?: SxProps;
  url: string;
  ready: boolean;
  handleReadyState: (ready: boolean) => void;
}

/**
 * Streams YouTube Videos with url
 */
export default function VideoPlayer(props: VideoPlayerProps) {
  const { sx, url, ready, handleReadyState } = props;

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        opacity: ready ? 1 : 0,
        justifyContent: "center",
        transition: "0.75s all ease",
        width: { xs: "346px", sm: "512px", md: "640px" },
        height: { xs: "180px", sm: "288px", md: "360px" },
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
          position: "absolute",
        }}
        onReady={() => handleReadyState(true)}
      />
    </Box>
  );
}
