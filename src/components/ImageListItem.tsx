// Imports
import AnimatedTrail from "./AnimatedTrail";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { default as ImageListItemMui } from "@mui/material/ImageListItem";

// Types
export interface ImageListItemProps {
  img: string;
  title: string;
  handleClick: () => void;
}

// Increase brightness on hover
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  transition: "all 0.1s",
  marginBottom: "12px",
  [theme.breakpoints.down("sm")]: { marginBottom: "32px" },
  "&:hover, &.Mui-focusVisible": { filter: " brightness(1.35)" },
}));

/**
 * Clickable list item for ImageList
 */
export default function ImageListItem(props: ImageListItemProps) {
  const { img, title, handleClick } = props;

  return (
    <AnimatedTrail open={true} endHeight={405}>
      <ImageButton onClick={handleClick} sx={{ borderRadius: "8px" }}>
        <ImageListItemMui key={img}>
          <img
            alt={title}
            loading="lazy"
            src={`${img}`}
            srcSet={`${img}`}
            style={{ width: "300px", borderRadius: "8px" }}
          />
        </ImageListItemMui>
      </ImageButton>
    </AnimatedTrail>
  );
}
