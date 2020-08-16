import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import lightTheme from "./themes/light";

export const customProviderRender = (component) =>
  render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
