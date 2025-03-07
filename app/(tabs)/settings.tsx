import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SettingsTab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
