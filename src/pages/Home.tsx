// Imports
import Page from "../components/Page";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeText from "../components/HomeText";
import MoneyIcon from "@mui/icons-material/Paid";
import ColorModeButton from "../components/ColorModeButton";

/**
 * Home Page
 */
export default function Home() {
  // Navigate to stripe page
  const handleSupport = () => {
    console.log("go to stripe");
  };

  return (
    <Page>
      <HomeText />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "280px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          onClick={handleSupport}
          startIcon={<MoneyIcon />}
          sx={{ textTransform: "none" }}
        >
          Support
        </Button>
        <ColorModeButton />
      </Stack>
    </Page>
  );
}
