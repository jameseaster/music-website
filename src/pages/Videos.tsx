// Imports
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Page from "../components/Page";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import VideoPlayer from "../components/VideoPlayer";
import { useEffect, useMemo, useState } from "react";
import { allVideos, VideoInterface } from "../assets/videos";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Select, { SelectChangeEvent } from "@mui/material/Select";

/**
 * Videos Page
 */
export default function Videos() {
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideoType, setSelectedVideoType] = useState("Transcriptions");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedVideoId(event.target.value as string);
  };

  const selectedVideo = useMemo(() => {
    return selectedVideoType && selectedVideoId
      ? allVideos[selectedVideoType]?.find(
          (video: VideoInterface) => video.id === selectedVideoId
        )
      : { id: "", image: "", title: "", url: "", pdf: "" };
  }, [selectedVideoId, selectedVideoType]);

  const openPdf = () => {
    if (selectedVideo && "pdf" in selectedVideo) {
      window.open(selectedVideo?.pdf, "_blank");
    }
  };

  const handleClick = (videoType: string) => {
    const defaultVideo = allVideos[videoType].find((v) => v.default);
    if (defaultVideo?.id) {
      setSelectedVideoId(defaultVideo.id);
      setSelectedVideoType(videoType);
    }
  };

  // Initial video selected on load
  useEffect(() => {
    handleClick("Transcriptions");
  }, []);

  return (
    <Page endHeight={550}>
      <Card
        sx={{
          mt: 2,
          borderRadius: "20px",
          backgroundColor: (theme) => theme.palette.primary.main,
          border: (theme) => `0.5px solid ${theme.palette.text.secondary}`,
        }}
      >
        <CardContent sx={{ p: 0, pb: 0, "&:last-child": { pb: 0 } }}>
          <Box sx={{ mt: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {Object.keys(allVideos).map((videoType) => (
                <Button
                  variant="text"
                  key={videoType}
                  onClick={() => handleClick(videoType)}
                  sx={{
                    mx: 1,
                    color: "white",
                    width: "100px",
                    textTransform: "none",
                    fontWeight: videoType === selectedVideoType ? "bolder" : "",
                    transform:
                      videoType === selectedVideoType ? "scale(1.2)" : "",
                  }}
                >
                  {videoType}
                </Button>
              ))}
            </Box>

            <FormControl fullWidth sx={{ mt: 4 }}>
              <Select
                variant="standard"
                onChange={handleChange}
                value={selectedVideoId}
                sx={{
                  textAlign: "center",
                  color: "white",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                {allVideos[selectedVideoType]?.length
                  ? allVideos[selectedVideoType]
                      .sort((a, b) => a.title.localeCompare(b.title))
                      .map(({ id, title }) => (
                        <MenuItem key={id} value={id}>
                          {title}
                        </MenuItem>
                      ))
                  : null}
              </Select>
            </FormControl>

            <VideoPlayer url={selectedVideo?.url || ""} />

            {selectedVideo && "pdf" in selectedVideo ? (
              <Box sx={{ textAlign: "center", m: 0 }}>
                <Button
                  onClick={openPdf}
                  startIcon={<PictureAsPdfIcon />}
                  sx={{ my: 1, textTransform: "none", color: "white" }}
                >
                  Download Sheet Music
                </Button>
              </Box>
            ) : null}
          </Box>
        </CardContent>
      </Card>
    </Page>
  );
}
