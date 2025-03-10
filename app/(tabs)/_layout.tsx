import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "tomato" }}>
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
        name="(user)"
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
          tabBarIcon: () => <Feather name="settings" size={24} color="red" />,
        }}
      />
    </Tabs>
  );
}
