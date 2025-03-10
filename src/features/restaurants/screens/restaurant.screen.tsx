import React, { useState } from "react";
// import { Link } from "expo-router";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "@/src/components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
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

      {/* <RestaurantInfoCard
        restaurant={{
          name: "My Restaurant",
          icon: "XX",
          photos: ["XXX"],
          address: "100 some random street",
          openingHours: "8:00 AM - 9:00 PM",
          rating: 4,
          isClosedTemporarily: true,
        }}
      /> */}
      {/* <Text>Home</Text>
        <Link href="/details">View details</Link> */}
    </SafeArea>
  );
};
