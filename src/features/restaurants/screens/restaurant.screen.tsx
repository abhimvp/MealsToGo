import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "@/src/components/spacer/spacer.component";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import { SearchContainer, RestaurantList } from "./restaurant.styles";
import { RestaurantsContext } from "@/src/services/restaurants/restaurant.context";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const restaruantContext = useContext(RestaurantsContext);
  console.log(restaruantContext); // {"restaurants": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search for an Item"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
        />
      </SearchContainer>
      <RestaurantList
        data={restaruantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard
              restaurant={{
                name: "My Restaurant",
                icon: "XX",
                photos: ["XXX"],
                address: "100 some random street",
                openingHours: "8:00 AM - 9:00 PM",
                rating: 4,
                isClosedTemporarily: true,
              }}
            />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
