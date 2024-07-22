// Imports
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { useTabSelect } from "./hooks/useTabSelect";
import { useAppState } from "./context/Providers/AppState";

/**
 * Top level component
 */
export default function App() {
  // Global State
  const [appState] = useAppState();

  // Hooks
  const { toTab } = useTabSelect();

  return (
    <Layout onTabSelect={toTab}>
      {appState.activeTabIndex === 0 && <Home />}
      {appState.activeTabIndex === 1 && <Music />}
      {appState.activeTabIndex === 2 && <Videos />}
      {appState.activeTabIndex === 3 && <Photos />}
      {appState.activeTabIndex === 4 && <Contact />}
    </Layout>
  );
}
