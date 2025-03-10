import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantScreen } from "../../../src/features/restaurants/screens/restaurant.screen";
export default function HomeScreen() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" backgroundColor="#000" />
    </>
  );
}
