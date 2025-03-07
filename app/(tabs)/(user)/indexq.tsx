import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
export default function HomeScreenQ() {
  return (
    <View style={styles.container}>
      <Text>Home Screen Q</Text>
      <Link href="/detailsq">View details Screen Q</Link>
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
