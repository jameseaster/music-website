// Imports
import { useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { PHOTOS } from "../utils/constants";
import ImageListItem from "./ImageListItem";
import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { default as ImageListMui } from "@mui/material/ImageList";

/**
 * Collection of images organized in a grid
 */
export default function ImageList() {
  // Local State
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Hooks
  const theme = useTheme();

  // Media Queries
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  // Columns on page
  const cols = useMemo(() => {
    if (md) {
      return 3;
    } else if (sm) {
      return 2;
    } else {
      return 1;
    }
  }, [md, sm]);

  const handleImageClick = (img: string) => {
    if (xs) {
      return;
    }
    setSelectedImage(img);
    setOpen(true);
  };

  const imageStyles = useMemo(() => {
    return xs
      ? { width: "95vw" }
      : { height: "95vh", maxHeight: "100%", maxWidth: "100%" };
  }, [xs]);

  return (
    <>
      <ImageListMui
        gap={8}
        cols={cols}
        sx={{
          width: "90vw",
          maxWidth: "800px",
          p: { xs: 4, sm: 8 },
          pt: { xs: 0, sm: 1 },
        }}
      >
        {PHOTOS.map((item) => (
          <ImageListItem
            key={item.img}
            img={item.img}
            title={item.title}
            handleClick={() => handleImageClick(item.img)}
          />
        ))}
      </ImageListMui>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box sx={{ overflow: "hidden" }}>
          <IconButton
            sx={{ position: "absolute", right: 0, top: 0 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <img
            loading="lazy"
            style={imageStyles}
            alt={"selected-image"}
            src={`${selectedImage}`}
            srcSet={`${selectedImage}`}
          />
        </Box>
      </Dialog>
    </>
  );
}
