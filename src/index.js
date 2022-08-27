import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import App from "./App";
import AuthContextProvider from "./Context/AuthContext";
import reportWebVitals from "./reportWebVitals.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
reportWebVitals()