import { StatusBar } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Players } from "@screens/Players";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}
