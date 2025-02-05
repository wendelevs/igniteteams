import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Groups } from "./src/screens/Groups";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
