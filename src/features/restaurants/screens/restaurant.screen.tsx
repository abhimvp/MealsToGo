import React, { useState } from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen =() =>{
  const [searchQuery, setSearchQuery] = useState("");
  return (
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
        <RestaurantInfoCard restaurant={{
          name: "My Restaurant",
          icon: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          photos: [
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          ],
          address: "100 some random street",
          openingHours: "8:00 AM - 9:00 PM",
          rating: 4,
          isClosedTemporarily: true,
        }} />
        {/* <Text>Home</Text>
        <Link href="/details">View details</Link> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // backgroundColor: "yellow",
  },
  search: {
    padding: 12,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    fontWeight: "bold",
  },
});
