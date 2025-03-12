import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/src/components/typography/text.component";
import { useLocalSearchParams } from "expo-router";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// https://docs.expo.dev/develop/dynamic-routes/#access-parameters-from-dynamic-segments
export const RestaurantDetailScreen = () => {
  const { restaurant } = useLocalSearchParams();
  const restaurantData = JSON.parse(restaurant as string);
  //   console.log(restaurantData);

  const { name, placeId, address } = restaurantData;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurantData} />
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text variant="label">Restaurant Name: {name}</Text>
        <Text variant="label">Place ID: {placeId}</Text>
        <Text variant="label">Address: {address}</Text>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
