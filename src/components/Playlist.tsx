// Imports
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";

// Types
export interface Track {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
}
interface Video {
  // pdf?: any;
  id: string;
  url: string;
  title: string;
  image: string;
  pdf_title?: string;
  sub_title?: string;
}
export interface PlaylistProps {
  height?: number;
  className?: string;
  noPadding?: boolean;
  selectedIndex?: number;
  list: Track[] | Video[];
  responsiveHeight?: boolean;
  handleSelect: (idx: number) => void;
}

/**
 * Playlist
 */
export default function Playlist(props: PlaylistProps) {
  // Props
  const { list, handleSelect, height = 400, selectedIndex } = props;

  return (
    <List
      sx={{
        width: "100%",
        height: height,
        maxWidth: "360px",
        overflowX: "hidden",
        borderRadius: "8px",
        bgcolor: "background.paper",
      }}
      component="nav"
      subheader={<ListSubheader component="div">House Plants</ListSubheader>}
    >
      {list.map((item: Track | Video, idx: number) => (
        <ListItemButton
          key={idx}
          selected={selectedIndex === idx}
          onClick={() => handleSelect(idx)}
        >
          <ListItemText primary={`${idx + 1}. ${item.title}`} />
        </ListItemButton>
      ))}
    </List>
  );
}
