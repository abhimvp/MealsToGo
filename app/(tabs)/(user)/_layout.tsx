import { Stack } from "expo-router";
import React from "react";
export default function UserLayout() {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#f451fe',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        headerShown: false,
      }}
    >
      <Stack.Screen name="indexq" />
      <Stack.Screen name="detailsq" />
    </Stack>
  );
}
