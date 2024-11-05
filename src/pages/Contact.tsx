// Imports
import Page from "../components/Page";
import ContactForm from "../components/ContactForm";

/**
 * Contact Page
 */
export default function Contact() {
  return (
    <Page endHeight={600} sx={{ mt: { xs: 2, sm: 2 } }}>
      <ContactForm />
    </Page>
  );
}
