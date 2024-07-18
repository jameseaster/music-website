// Imports
import React from "react";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import GlobalStateWrapper from "./context/GlobalStateWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStateWrapper>
      <App />
    </GlobalStateWrapper>
  </React.StrictMode>
);
