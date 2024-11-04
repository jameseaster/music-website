// Imports
import axios from "axios";
import validator from "validator";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ACTIONS } from "../utils/constants";
import { useSnacks } from "../hooks/useSnacks";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo, useEffect, useState } from "react";
import { useAppState } from "../context/Providers/AppState";

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

  const disableSend = useMemo(() => {
    return form?.message?.length < 5 || !form.email || !form.name;
  }, [form]);

  // Hooks
  const { handleSnack } = useSnacks();

  const handleChange = (key: string, value: string) => {
    if (key === "message" && value.length <= 250) {
      setForm((form) => ({ ...form, [key]: value }));
    } else if (key === "email" && value.length <= 40) {
      setForm((form) => ({ ...form, [key]: value }));
    } else if (key === "name" && value.length <= 40) {
      setForm((form) => ({ ...form, [key]: value }));
    }
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
        const url = import.meta.env.VITE_EMAIL_FN || "";
        const result = await axios.post(url, form);
        if (result.data.error) throw new Error(result.data.message);
        handleSnack({ success: "Message sent!" });
        setForm(defaultFormState);
      } catch (err) {
        console.error(err);
        handleSnack({ error: "Unable to send message" });
      } finally {
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

  // Check Contact Form Name Validation
  useEffect(() => {
    if (!validated.name && form.name.length > 2) {
      setValidated((v) => ({ ...v, name: true }));
    }
  }, [form.name, validated.name]);

  // Check Contact Form Email Validation
  useEffect(() => {
    if (!validated.email && validator.isEmail(form.email)) {
      setValidated((v) => ({ ...v, email: true }));
    }
  }, [form.email, validated.email]);

  // Check Contact Form Message Validation
  useEffect(() => {
    if (!validated.message && form.message.length > 9) {
      setValidated((v) => ({ ...v, message: true }));
    }
  }, [form.message, validated.message]);

  return (
    <Stack
      spacing={3}
      sx={{ mt: -1, p: 1, width: { xs: "65vw", sm: "250px" } }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        Message me for bookings, questions, or lessons
      </Typography>
      <TextField
        required
        size="small"
        name="name"
        label="Name"
        value={form.name}
        variant="outlined"
        error={!validated.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        required
        size="small"
        name="email"
        label="Email"
        variant="outlined"
        value={form.email}
        error={!validated.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Stack>
        <TextField
          rows={8}
          required
          multiline
          size="small"
          name="message"
          label="Message"
          variant="outlined"
          value={form.message}
          error={!validated.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            mr: 0.5,
            textAlign: "end",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          {form.message.length} / 250
        </Typography>
      </Stack>
      <Button
        variant="contained"
        onClick={sendMessage}
        disabled={disableSend}
        sx={{
          alignSelf: "center",
          textTransform: "none",
        }}
      >
        Send Message
      </Button>
    </Stack>
  );
}
