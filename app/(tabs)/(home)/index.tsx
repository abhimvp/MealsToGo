import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar} from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import React, { useState } from "react";
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
        <Searchbar
          placeholder="Search for an Item"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
        />
        </View>
        <View style={styles.list}>
          <Text>Home</Text>
          <Link href="/details">View details</Link>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" backgroundColor="#000" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // backgroundColor: "yellow",
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    fontWeight:"bold"
  },
});
