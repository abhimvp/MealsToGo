import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../../src/infrastructure/theme";
import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurant.screen";
export default function HomeScreen() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
      
      <ExpoStatusBar style="auto" backgroundColor="#000" />
    </>
  );
}
