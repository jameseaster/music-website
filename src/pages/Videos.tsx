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
  const [ready, setReady] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideoType, setSelectedVideoType] = useState("Transcriptions");

  const handleReadyState = (readyState: boolean) => {
    setReady(readyState);
  };

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
    <Page endHeight={600}>
      <>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Object.keys(allVideos).map((videoType) => (
            <Button
              size="large"
              disableRipple
              variant="text"
              key={videoType}
              onClick={() => handleClick(videoType)}
              sx={{
                mx: videoType === "Transcriptions" ? 3 : 0,
                mb: 0.5,
                textTransform: "none",
                transition: "0.3s all ease-in",
                width: { xs: "100px", sm: "125px" },
                transform:
                  videoType === selectedVideoType
                    ? "scale(1.3)"
                    : "scale(0.95)",
                letterSpacing:
                  videoType === selectedVideoType ? "0.1em" : "0.06em",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? ""
                    : theme.palette.text.primary,
              }}
            >
              {videoType}
            </Button>
          ))}
        </Box>
        <Card
          sx={{
            borderRadius: "20px",
            transition: "1s all ease",
            backgroundColor: (theme) =>
              ready ? theme.palette.primary.main : "transparent",
            border: (theme) => `0.5px solid ${theme.palette.text.secondary}`,
          }}
        >
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <VideoPlayer
              ready={ready}
              url={selectedVideo?.url || ""}
              handleReadyState={handleReadyState}
            />
            <FormControl fullWidth sx={{ px: { xs: 0.5, sm: 2 }, my: 1 }}>
              <Select
                disableUnderline
                variant="standard"
                onChange={handleChange}
                value={selectedVideoId}
                sx={{
                  color: "white",
                  textAlign: "center",
                  "& .MuiSvgIcon-root": { color: "white" },
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
          </CardContent>
        </Card>
        {selectedVideo && "pdf" in selectedVideo ? (
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              onClick={openPdf}
              startIcon={<PictureAsPdfIcon />}
              sx={{
                textTransform: "none",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? ""
                    : theme.palette.text.secondary,
              }}
            >
              Download Sheet Music
            </Button>
          </Box>
        ) : null}
      </>
    </Page>
  );
}
