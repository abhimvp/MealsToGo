import React, { useContext } from "react";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "@/src/components/spacer/spacer.component";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { RestaurantList, Loading, LoadingContainer } from "./restaurant.styles";
import { RestaurantsContext } from "@/src/services/restaurants/restaurant.context";
import { FavouritesContext } from "@/src/services/favourites/favourites.context";

export const RestaurantScreen = () => {
  const router = useRouter();
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  // console.log(favourites);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color="#D22328" size={50} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/(tabs)/(home)/details",
                  params: { restaurant: JSON.stringify(item) },
                });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
