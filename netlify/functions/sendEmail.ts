import axios from "axios";

/**
 * Extract body to send data to EmailJS
 */
export const handler = async ({ httpMethod, body }) => {
  try {
    // Validate method
    if (httpMethod !== "POST") {
      return {
        statusCode: 400,
        message: "Request method not accepted.",
      };
    }
    // Validate data
    const { name, email, message } = JSON.parse(body);
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        message: "Incorrect parameters.",
      };
    }
    // Construct email data
    const url = process.env.REACT_APP_EMAIL_URL || "";
    const emailData = {
      template_params: {
        from_name: name,
        reply_to: email,
        message: message,
        to_name: "James",
      },
      user_id: process.env.REACT_APP_USER_ID,
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    };
    // Send email
    const response = await axios.post(url, emailData);
    return { statusCode: response.status };
  } catch (err) {
    return { statusCode: 500, message: "Failed to send email." };
  }
};
