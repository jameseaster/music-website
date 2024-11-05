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
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  // Columns on page
  const cols = useMemo(() => {
    if (lg) {
      return 3;
    } else if (sm) {
      return 2;
    }
    return 1;
  }, [lg, sm]);

  const handleImageClick = (img: string) => {
    window.open(img, "_blank");
  };

  return (
    <ImageListMui cols={cols} sx={{ px: 2, mt: 0 }}>
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
