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
  transition: "all 0.15s ease",
  marginBottom: "12px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "32px",
  },
  "&:hover, &.Mui-focusVisible": { opacity: 0.85, transform: "scale(1.005)" },
}));

/**
 * Clickable list item for ImageList
 */
export default function ImageListItem(props: ImageListItemProps) {
  const { img, title, handleClick } = props;

  return (
    <AnimatedTrail open={true} endHeight={405}>
      <ImageButton
        onClick={handleClick}
        sx={{
          borderRadius: "4px",
          border: (theme) => `1px solid ${theme.palette.text.secondary}`,
        }}
      >
        <ImageListItemMui key={img}>
          <img
            alt={title}
            loading="lazy"
            src={`${img}`}
            srcSet={`${img}`}
            style={{ width: "300px", borderRadius: "4px" }}
          />
        </ImageListItemMui>
      </ImageButton>
    </AnimatedTrail>
  );
}
