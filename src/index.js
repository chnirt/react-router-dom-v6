import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./theme";

import App from "./App";
import { AuthProvider } from "./context/useAuth";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
