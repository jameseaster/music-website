// Imports
import { useState } from "react";
import Page from "../components/Page";
import { tracks } from "../assets/tracks";
import AudioPlayer from "../components/AudioPlayer";

/**
 * Music Page
 */
export default function Music() {
  // Local State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isFirstSong, setIsFirstSong] = useState(true);

  // Skip audio track forward or backward
  const skip = (to: "next" | "prev") => {
    setIsFirstSong(false);
    return to === "next"
      ? trackIndex < tracks.length - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0)
      : trackIndex - 1 >= 0
      ? setTrackIndex(trackIndex - 1)
      : setTrackIndex(tracks.length - 1);
  };

  // Select audio track from playlist
  const handleAudioSelect = (key: number) => {
    setIsFirstSong(false);
    setTrackIndex(key);
  };

  return (
    <Page>
      <AudioPlayer
        skip={skip}
        tracks={tracks}
        trackIndex={trackIndex}
        isFirstSong={isFirstSong}
        handleSelect={handleAudioSelect}
      />
    </Page>
  );
}
