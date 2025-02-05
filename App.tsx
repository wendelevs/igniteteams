import React from "react";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Groups } from "./src/screens/Groups";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}
