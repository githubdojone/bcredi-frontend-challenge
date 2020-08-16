import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import lightTheme from "./themes/light";
import GlobalStyle from "./styles/global";
import Routes from "./Routes";
import { AppProvider } from "./contexts/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <AppProvider>
        <Router>
          <Routes />
          <GlobalStyle />
        </Router>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
