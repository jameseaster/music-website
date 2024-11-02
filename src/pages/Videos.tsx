// Imports
import { Box } from "@mui/material";
import Page from "../components/Page";
import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import { allVideos } from "../assets/videos";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import VideoPlayer from "../components/VideoPlayer";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Select, { SelectChangeEvent } from "@mui/material/Select";

/**
 * Videos Page
 */
export default function Videos() {
  const [selectedVideoId, setSelectedVideoId] = useState(
    allVideos[0].info[0].id
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedVideoId(event.target.value as string);
  };

  const selectedVideo = useMemo(() => {
    return allVideos[0].info.find((video) => video.id === selectedVideoId);
  }, [selectedVideoId]);

  const openPdf = () => {
    if (selectedVideo && typeof selectedVideo?.pdf === "string") {
      window.open(selectedVideo.pdf, "_blank");
    }
  };
  return (
    <Page>
      <Box sx={{ pt: 1 }}>
        <VideoPlayer url={selectedVideo?.url || ""} />

        <Box sx={{ mt: 5 }}>
          <FormControl fullWidth>
            <InputLabel>Transcriptions</InputLabel>
            <Select
              value={selectedVideoId}
              label="Transcriptions"
              onChange={handleChange}
            >
              {allVideos[0].info.map(({ id, title, sub_title }) => (
                <MenuItem value={id}>
                  {title} - {sub_title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={openPdf}
            sx={{ mt: 1, textTransform: "none" }}
            startIcon={<PictureAsPdfIcon />}
          >
            Download Sheet Music
          </Button>
        </Box>
      </Box>
    </Page>
  );
}
