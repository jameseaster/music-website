// Imports
import { useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import { useAppState } from "../context/Providers/AppState";
import { ACTIONS, APP_CONSTANTS } from "../utils/constants";

// Constants
const defaultFormState = { name: "", email: "", message: "" };

/**
 * Allows user to send message
 */
export default function ContactForm() {
  // Global State
  const [, dispatchAppState] = useAppState();

  // Local State
  const [form, setForm] = useState(defaultFormState);

  const handleChange = (key: string, value: string) => {
    setForm((form) => ({ ...form, [key]: value }));
  };

  const sendMessage = async () => {
    setLoading(true);
    try {
      // MOCK AWAIT: DEVELOPMENT ONLY (REMOVE AFTER TESTING) //
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(form);
      setForm(defaultFormState);
      // MOCK AWAIT: DEVELOPMENT ONLY (REMOVE AFTER TESTING) //
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const setLoading = (loading: boolean) => {
    console.log("this ran", loading);
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
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            required
            size="small"
            name="email"
            label="Email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            rows={8}
            required
            multiline
            size="small"
            name="message"
            label="Message"
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
