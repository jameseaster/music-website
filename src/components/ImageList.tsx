// Imports
import { useMemo } from "react";
import { useTheme } from "@mui/material";
import { PHOTOS } from "../utils/constants";
import ImageListItem from "./ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { default as ImageListMui } from "@mui/material/ImageList";

/**
 * Collection of images organized in a grid
 */
export default function ImageList() {
  // Hooks
  const theme = useTheme();

  // Media Queries
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  // Columns on page
  const cols = useMemo(() => {
    if (md || sm) {
      return 2;
    }
    return 1;
  }, [md, sm]);

  const handleImageClick = (img: string) => {
    window.open(img, "_blank");
  };

  return (
    <ImageListMui cols={cols} sx={{ px: 2 }}>
      {PHOTOS.map((item) => (
        <ImageListItem
          key={item.img}
          img={item.img}
          title={item.title}
          handleClick={() => handleImageClick(item.img)}
        />
      ))}
    </ImageListMui>
  );
}
