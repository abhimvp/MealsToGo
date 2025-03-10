import React from "react";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="details" />  Will use this later if needed. for now in this tab , only 1 main screen*/}
    </Stack>
  );
}
