// Imports
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";
import { useTabSelect } from "./hooks/useTabSelect";
import { useAppState } from "./context/Providers/AppState";

// Icons
import HomeIcon from "@mui/icons-material/ChairTwoTone";
import MusicIcon from "@mui/icons-material/HeadphonesTwoTone";
import VideoIcon from "@mui/icons-material/LiveTvTwoTone";
import GalleryIcon from "@mui/icons-material/PhotoCameraTwoTone";
import ContactIcon from "@mui/icons-material/EmailTwoTone";

// Navigation options for drawer
const tabs = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Music", icon: <MusicIcon /> },
  { text: "Videos", icon: <VideoIcon /> },
  { text: "Gallery", icon: <GalleryIcon /> },
  { text: "Contact", icon: <ContactIcon /> },
];

/**
 * Top level component
 */
export default function App() {
  // Global State
  const [appState] = useAppState();

  // Hooks
  const { toTab } = useTabSelect();

  return (
    <Layout
      tabs={tabs}
      onTabSelect={toTab}
      selectedIndex={Number(appState.activeTabIndex) | 0}
    >
      {appState.activeTabIndex === 0 && <Home />}
      {appState.activeTabIndex === 1 && <Music />}
      {appState.activeTabIndex === 2 && <Videos />}
      {appState.activeTabIndex === 3 && <Gallery />}
      {appState.activeTabIndex === 4 && <Contact />}
    </Layout>
  );
}
