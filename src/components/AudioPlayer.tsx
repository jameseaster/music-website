// React Imports
import { Howl } from "howler";
import Playlist from "./Playlist";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import AudioControls from "../components/AudioControls";
import CircularProgress from "@mui/material/CircularProgress";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

// Types
export interface Track {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
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
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [viewPlaylist, setViewPlaylist] = useState(false);

  // Constants
  const { title, artist, /* color,*/ image, audioSrc } = tracks[trackIndex];

  // Refs
  const intervalRef = useRef(0);
  const audioRef = useRef(new Howl({ src: [audioSrc], autoplay: false }));

  // Check for duration to activate scrub feature
  useEffect(() => {
    function checkForDuration() {
      if (audioRef.current.duration() === 0) {
        setTimeout(() => checkForDuration(), 250);
      } else {
        setDuration(audioRef.current.duration());
        setTimeout(() => setLoading(false), 500);
      }
    }
    checkForDuration();
  }, []);

  // Play Track if isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
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
    // Clear any timers already running
    clearInterval(intervalRef.current);
    const current = Number(audioRef.current.seek());
    const length = Number(audioRef.current.duration());
    intervalRef.current = window.setInterval(() => {
      if (current !== 0 && current === length) {
        skip("next");
      } else {
        const progress = Number(audioRef.current.seek());
        setTrackProgress(progress);
      }
    }, 1000);
  };

  const onScrub = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.seek(value);
    setTrackProgress(value);
  };

  const togglePlaylistView = () => {
    setViewPlaylist((v) => !v);
  };

  return (
    <Box
      sx={{
        p: 2,
        mb: 6,
        display: "flex",
        borderRadius: "20px",
        flexDirection: "column",
        border: "solid 1px white",
        boxShadow: "0 28px 28px rgba(0, 0, 0, .7)",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton onClick={togglePlaylistView}>
            <FormatListBulletedOutlinedIcon style={{ fontSize: "18px" }} />
          </IconButton>
        </Box>
        <Box sx={{ mx: 2, mb: 2 }}>
          <img
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "90px",
            }}
          />
        </Box>
        {loading ? (
          <Box
            sx={{
              height: "126px",
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
            <Typography sx={{ color: "white" }}>{artist}</Typography>
            <AudioControls
              isPlaying={isPlaying}
              onPlayPauseClick={setIsPlaying}
              onPrevClick={() => skip("prev")}
              onNextClick={() => skip("next")}
            />
            <Slider
              min={0}
              step={1}
              max={duration}
              value={trackProgress}
              sx={{ width: "80%", color: "white" }}
              onChange={(_, value) => onScrub(Number(value))}
            />
          </>
        )}
      </Box>
      {viewPlaylist && (
        <Box sx={{ p: 1, mt: 3 }}>
          <Playlist
            height={320}
            list={tracks}
            selectedIndex={trackIndex}
            handleSelect={handleSelect}
          />
        </Box>
      )}
    </Box>
  );
}
