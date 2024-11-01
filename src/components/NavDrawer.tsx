// Imports
import { Box } from "@mui/material";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ColorModeButton from "./ColorModeButton";
import { APP_CONSTANTS } from "../utils/constants";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// Types
export interface NavDrawerProps {
  openDrawer: boolean;
  selectedIndex: number;
  tabs: { text: string; icon: JSX.Element }[];
  onTabSelect: (selectedTabText: number) => void;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

// Constants
const drawerWidth = APP_CONSTANTS.DRAWER_WIDTH;

/**
 * Drawer with items for app navigation
 */
export default function NavDrawer(props: NavDrawerProps) {
  // Props
  const { tabs, selectedIndex, onTabSelect, openDrawer, setOpenDrawer } = props;

  // Selects tab and closes drawer
  const handleTabSelect = (index: number) => {
    onTabSelect(index);
  };

  // Top items
  const TopDrawerItems = () => {
    return (
      <Box>
        <List>
          {tabs.map(({ text, icon }, index) => (
            <ListItem key={text}>
              <ListItemButton
                sx={{ borderRadius: 12 }}
                selected={selectedIndex === index}
                onClick={() => handleTabSelect(index)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  // Bottom items
  const BottomDrawerItems = () => {
    return (
      <Box>
        <List>
          <ColorModeButton />
        </List>
      </Box>
    );
  };

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      variant={"temporary"}
      sx={{
        flexShrink: 0,
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          justifyContent: "space-between",
        },
      }}
    >
      <TopDrawerItems />
      <BottomDrawerItems />
    </Drawer>
  );
}
