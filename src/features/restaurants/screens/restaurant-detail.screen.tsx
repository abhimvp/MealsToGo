import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// https://docs.expo.dev/develop/dynamic-routes/#access-parameters-from-dynamic-segments
export const RestaurantDetailScreen = () => {
  const { restaurant } = useLocalSearchParams();
  const restaurantData = JSON.parse(restaurant as string);
  //   console.log(restaurantData);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const handleBreakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurantData} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handleBreakfastPress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={handleLunchPress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="noodles" />}
          expanded={dinnerExpanded}
          onPress={handleDinnerPress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="water" />}
          expanded={drinksExpanded}
          onPress={handleDrinksPress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
