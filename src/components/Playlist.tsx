// Imports
import List from "@mui/material/List";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
// import ListSubheader from "@mui/material/ListSubheader";

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
  closePlaylist: () => void;
  responsiveHeight?: boolean;
  handleSelect: (idx: number) => void;
}

/**
 * Playlist
 */
export default function Playlist(props: PlaylistProps) {
  // Props
  const {
    list,
    handleSelect,
    height = 400,
    selectedIndex,
    closePlaylist,
  } = props;

  return (
    <List
      sx={{
        pt: 4,
        width: "100%",
        height: height,
        maxWidth: "360px",
        overflowX: "hidden",
        borderRadius: "4px",
        bgcolor: "background.paper",
      }}
      component="nav"
      // subheader={
      //   <ListSubheader component="div">Add Album Name Here</ListSubheader>
      // }
    >
      <IconButton
        size="small"
        onClick={closePlaylist}
        sx={{ position: "absolute", top: 2, right: 2, zIndex: 3 }}
      >
        <Close sx={{ fontSize: "22px" }} />
      </IconButton>
      {list.map((item: Track | Video, idx: number) => (
        <ListItemButton
          key={idx}
          selected={selectedIndex === idx}
          onClick={() => {
            handleSelect(idx);
            setTimeout(() => closePlaylist(), 350);
          }}
        >
          <ListItemText primary={`${idx + 1}. ${item.title}`} />
        </ListItemButton>
      ))}
    </List>
  );
}
