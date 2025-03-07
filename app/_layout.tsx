import { Stack } from "expo-router/stack";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
// console.log(StatusBar.currentHeight)
export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Searchbar
          placeholder="Search for an Item"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
        />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
      <ExpoStatusBar style="auto" backgroundColor="#f4511e" />
    </>
  );
}
