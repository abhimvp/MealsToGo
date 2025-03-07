import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Food",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="forward" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(user)"
        options={{
          title: "User Stack navigation",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="code" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings tab",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newhome"
        options={{
          title: "Another test tab",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
