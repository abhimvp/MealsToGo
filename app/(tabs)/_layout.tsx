import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurant.context";
import { FavouritesContextProvider } from "@/src/services/favourites/favourites.context";
import { theme } from "../../src/infrastructure/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
export default function TabLayout() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
                <Tabs.Screen
                  name="(home)"
                  options={{
                    title: "Restaurants",
                    tabBarIcon: () => (
                      <Ionicons name="restaurant" size={24} color="orange" />
                    ),
                    headerShown: false,
                  }}
                />
                <Tabs.Screen
                  name="(maps)"
                  options={{
                    title: "Maps",
                    tabBarIcon: () => (
                      <MaterialCommunityIcons
                        name="google-maps"
                        size={24}
                        color="green"
                      />
                    ),
                    headerShown: false,
                  }}
                />
                <Tabs.Screen
                  name="settings"
                  options={{
                    title: "Settings",
                    tabBarIcon: () => (
                      <Feather name="settings" size={24} color="red" />
                    ),
                  }}
                />
              </Tabs>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" backgroundColor="#000" />
    </>
  );
}
