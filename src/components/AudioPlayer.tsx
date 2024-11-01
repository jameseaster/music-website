// Imports
import { Howl } from "howler";
import Playlist from "./Playlist";
import Fade from "@mui/material/Fade";
import Slider from "@mui/material/Slider";
import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { APP_CONSTANTS } from "../utils/constants";
import { useState, useEffect, useRef } from "react";
import AudioControls from "../components/AudioControls";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import CircularProgress from "@mui/material/CircularProgress";

// Types
export interface Track {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
  duration: number;
}
export interface AudioPlayerProps {
  tracks: Track[];
  trackIndex: number;
  isFirstSong: boolean;
  skip: (to: "next" | "prev") => void;
  handleSelect: (idx: number) => void;
}

/**
 * AudioPlayer
 *
 * A media player that takes in a list of tracks and offers the ability to
 * play, pause, go to next, and go to previous.
 */
export default function AudioPlayer(props: AudioPlayerProps) {
  // Props
  const { skip, tracks, trackIndex, handleSelect, isFirstSong } = props;

  // State
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [viewPlaylist, setViewPlaylist] = useState(false);

  // Hooks
  const theme = useTheme();

  // Constants
  const { title, artist, duration, image, audioSrc } = tracks[trackIndex];

  // Refs
  const intervalRef = useRef(0);
  const containerRef = useRef<HTMLElement>(null);
  const audioRef = useRef(new Howl({ src: [audioSrc], autoplay: false }));

  // Check for duration to activate scrub feature
  useEffect(() => {
    function checkForDuration() {
      if (audioRef.current.duration() === 0) {
        setTimeout(() => checkForDuration(), 250);
      } else {
        setTimeout(() => setLoading(false), 500);
      }
    }
    checkForDuration();
  }, [trackIndex]);

  // Play Track if isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]); // eslint-disable-line

  // Pause song and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    // Pause current track
    audioRef.current.pause();
    // Create new howl with new audioSrc
    audioRef.current = new Howl({ src: [audioSrc], autoplay: false });
    // Extract current progress TODO: which could just always be 0?
    const progress = Number(audioRef.current.seek());
    setTrackProgress(progress);
    // This is to prevent the audio from playing automatically
    if (!isFirstSong) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
  }, [audioSrc]); // eslint-disable-line

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      const current = Number(audioRef.current.seek());
      if (Math.ceil(current) === duration) {
        skip("next");
      } else {
        const progress = Number(audioRef.current.seek());
        setTrackProgress(progress);
      }
    }, 500);
  };

  const onScrub = (value: number) => {
    clearInterval(intervalRef.current);
    audioRef.current.seek(value);
    setTrackProgress(value);
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const togglePlaylistView = () => {
    setViewPlaylist((v) => !v);
  };

  const formatDuration = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <Box
      sx={{
        p: 2,
        my: 2,
        display: "flex",
        position: "relative",
        borderRadius: "20px",
        flexDirection: "column",
        border: APP_CONSTANTS.BORDER,
        boxShadow: APP_CONSTANTS.BOX_SHADOW,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <IconButton
        size="small"
        onClick={togglePlaylistView}
        sx={{ position: "absolute", right: 12, top: 8, color: "white" }}
      >
        <QueueMusicIcon sx={{ fontSize: "22px" }} />
      </IconButton>
      {!viewPlaylist && (
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mx: 2, my: 2 }}>
            <img
              src={image}
              alt={`track artwork for ${title} by ${artist}`}
              style={{ width: "180px", height: "180px", borderRadius: "90px" }}
            />
          </Box>
          {loading ? (
            <Box
              sx={{
                height: "158px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size="36px" sx={{ color: "white" }} />
            </Box>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography sx={{ color: "white", mb: 1 }}>{artist}</Typography>
              <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
                onPrevClick={() => skip("prev")}
                onNextClick={() => skip("next")}
              />
              <Box
                sx={{
                  my: 0.5,
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "white" }}>
                  {formatDuration(audioRef.current.seek())}
                </Typography>
                <Slider
                  min={0}
                  step={1}
                  max={duration}
                  value={trackProgress}
                  onChange={(_, value) => onScrub(Number(value))}
                  sx={{ color: "white", mx: 2, flexGrow: 1 }}
                />
                <Typography variant="caption" sx={{ color: "white" }}>
                  {formatDuration(duration)}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      )}
      {viewPlaylist && (
        <Fade in={viewPlaylist} easing={theme.transitions.easing.easeOut}>
          <Box sx={{ p: 0, zIndex: 2, width: 212 }}>
            <Playlist
              height={377}
              list={tracks}
              selectedIndex={trackIndex}
              handleSelect={handleSelect}
              closePlaylist={() => setViewPlaylist(false)}
            />
          </Box>
        </Fade>
      )}
    </Box>
  );
}
