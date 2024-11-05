// Imports
import Page from "../components/Page";
import Stack from "@mui/material/Stack";
import HomeText from "../components/HomeText";
import SupportButton from "../components/SupportButton";
import ColorModeButton from "../components/ColorModeButton";

/**
 * Home Page
 */
export default function Home() {
  return (
    <Page sx={{ mt: { xs: 1, sm: -4 } }}>
      <HomeText />
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "280px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SupportButton />
        <ColorModeButton />
      </Stack>
    </Page>
  );
}
