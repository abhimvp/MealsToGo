import React from "react";
import { View, ScrollView, Pressable } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
const FavouritesWrapper = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <Pressable
                onPress={() =>
                  onNavigate({
                    pathname: "/(tabs)/(home)/details",
                    params: { restaurant: JSON.stringify(restaurant) },
                  })
                }
              >
                <CompactRestaurantInfo isMap restaurant={restaurant} />
              </Pressable>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
