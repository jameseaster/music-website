// Imports
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { APP_CONSTANTS } from "../utils/constants";
import { default as ImageListItemMui } from "@mui/material/ImageListItem";

// Types
export interface ImageListItemProps {
  img: string;
  title: string;
  handleClick: () => void;
}

// Increase brightness on hover
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  transition: "all 0.25s ease",
  marginBottom: "12px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "32px",
  },
  "&:hover, &.Mui-focusVisible": { opacity: 0.9, transform: "scale(1.02)" },
}));

/**
 * Clickable list item for ImageList
 */
export default function ImageListItem(props: ImageListItemProps) {
  const { img, title, handleClick } = props;

  return (
    <ImageButton onClick={handleClick}>
      <ImageListItemMui
        key={img}
        sx={{
          borderRadius: "20px",
          boxShadow: APP_CONSTANTS.BOX_SHADOW,
        }}
      >
        <img
          alt={title}
          loading="lazy"
          src={`${img}`}
          srcSet={`${img}`}
          style={{ borderRadius: "20px" }}
        />
      </ImageListItemMui>
    </ImageButton>
  );
}
