// Imports
import Page from "../components/Page";
import ImageList from "../components/ImageList";

/**
 * Photos Page
 */
export default function Photos() {
  return (
    <Page sx={{ mt: { xs: 1, sm: 2 } }}>
      <ImageList />
    </Page>
  );
}
