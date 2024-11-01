// Imports
import axios from "axios";
import { useState } from "react";
import validator from "validator";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import { useAppState } from "../context/Providers/AppState";
import { ACTIONS, APP_CONSTANTS } from "../utils/constants";

// Constants
const defaultFormState = { name: "", email: "", message: "" };
const initialValidation = { name: true, email: true, message: true };

/**
 * Allows user to send message
 */
export default function ContactForm() {
  // Global State
  const [, dispatchAppState] = useAppState();

  // Local State
  const [form, setForm] = useState(defaultFormState);
  const [validated, setValidated] = useState(initialValidation);

  const handleChange = (key: string, value: string) => {
    setForm((form) => ({ ...form, [key]: value }));
  };

  // Send message and notify user of result
  const sendMessage = async () => {
    const name = form.name.length > 1;
    const email = validator.isEmail(form.email);
    const message = form.message.length > 10;
    setValidated({ name, email, message });
    if (name && email && message && validated) {
      setLoading(true);
      try {
        // Send message to email
        const url = import.meta.env.VITE_EMAIL_FN || "";
        const result = await axios.post(url, form);
        // Check for errors
        if (result.data.error) throw new Error(result.data.message);
        // Create notification
        // setSnack({ open: true, severity: "success", message: "Message sent!" });
        console.log("success");
        // Clear form data
        setForm(defaultFormState);
      } catch (err) {
        // Log error
        console.error(err);
        // setSnack({ open: true, severity: "error", message: "Failed to send" });
      } finally {
        // Resolve loading
        setLoading(false);
      }
    }
  };

  const setLoading = (loading: boolean) => {
    dispatchAppState({
      type: ACTIONS.UPDATE_SHOW_LOADING_OVERLAY,
      payload: { showLoadingOverlay: loading },
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: {
          xs: "90vw",
          sm: "325px",
          maxWidth: "325px",
          borderRadius: "20px",
          boxShadow: APP_CONSTANTS.BOX_SHADOW,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
        <Stack spacing={2} sx={{ my: 1 }}>
          <TextField
            required
            size="small"
            name="name"
            label="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            required
            size="small"
            name="email"
            label="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            rows={8}
            required
            multiline
            size="small"
            name="message"
            label="Message"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={sendMessage}
            disabled={form?.message?.length < 5 || !form.email || !form.name}
            sx={{ textTransform: "none" }}
          >
            Send
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
