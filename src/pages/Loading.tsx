// Imports
import Page from "../components/Page";
import CircularProgress from "@mui/material/CircularProgress";

// Loading Page
export default function Loading() {
  return (
    <Page>
      <CircularProgress size={40} sx={{ mt: "15%" }} />
    </Page>
  );
}
