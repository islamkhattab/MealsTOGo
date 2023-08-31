import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";

import { RestuarantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
