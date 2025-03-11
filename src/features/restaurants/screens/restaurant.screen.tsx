import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "@/src/components/spacer/spacer.component";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import {
  SearchContainer,
  RestaurantList,
  Loading,
  LoadingContainer,
} from "./restaurant.styles";
import { RestaurantsContext } from "@/src/services/restaurants/restaurant.context";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color="#D22328" size={50} />
        </LoadingContainer>
      )}

      <SearchContainer>
        <Searchbar
          placeholder="Search for an Item"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
        />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
