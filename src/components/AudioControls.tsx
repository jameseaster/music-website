// Imports
import Pause from "@mui/icons-material/Pause";
import Next from "@mui/icons-material/SkipNext";
import Play from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import Prev from "@mui/icons-material/SkipPrevious";

// Types
export interface AudioControlsProps {
  isPlaying: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
  onPlayPauseClick: (command: boolean) => void;
}

/**
 * AudioControls
 * Pause, Play, Next & Prev buttons at the bottom of the audio player
 */
export default function AudioControls(props: AudioControlsProps) {
  // Props
  const { isPlaying, onPrevClick, onNextClick, onPlayPauseClick } = props;

  return (
    <div className="audio-controls">
      <IconButton onClick={onPrevClick}>
        <Prev />
      </IconButton>
      {isPlaying ? (
        <IconButton onClick={() => onPlayPauseClick(false)}>
          <Pause />
        </IconButton>
      ) : (
        <IconButton onClick={() => onPlayPauseClick(true)}>
          <Play />
        </IconButton>
      )}
      <IconButton onClick={onNextClick}>
        <Next />
      </IconButton>
    </div>
  );
}
