import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import lightTheme from "./themes/light";
import GlobalStyle from "./styles/global";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
