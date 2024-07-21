// React Imports
import { Howl } from "howler";
import Playlist from "./Playlist";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import AudioControls from "../components/AudioControls";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [viewPlaylist, setViewPlaylist] = useState(false);

  // Constants
  const { title, artist, /* color,*/ image, audioSrc } = tracks[trackIndex];

  // Refs
  const intervalRef = useRef(0);
  const audioRef = useRef(new Howl({ src: [audioSrc], autoplay: false }));

  // Current track duration
  const duration = audioRef.current.duration();

  // Styling the scrub bar
  // const currentPercentage = `${(trackProgress / duration) * 100}%`;
  // const trackStyling =
  //   "-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
  //   currentPercentage +
  //   ", #fff), color-stop(" +
  //   currentPercentage +
  //   ", #777))";

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

  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     setIsPlaying(true);
  //   }
  //   startTimer();
  // };

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
        backgroundColor: "#2f4f4f", // TODO: ADD TO THEME
        boxShadow: "0 28px 28px rgba(0, 0, 0, .7)",
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
        <img
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
          style={{
            width: "200px",
            padding: "8px",
            height: "200px",
            borderRadius: "120px",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography>{artist}</Typography>
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
          // onAfterChange={onScrubEnd}
          onChange={(_, value) => onScrub(Number(value))}
        />
      </Box>
      {viewPlaylist && (
        <div>
          <Playlist
            height={320}
            list={tracks}
            selectedIndex={trackIndex}
            handleSelect={handleSelect}
          />
        </div>
      )}
    </Box>
  );
}
