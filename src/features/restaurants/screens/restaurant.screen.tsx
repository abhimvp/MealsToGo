import React, { useState } from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: orange;
`;

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
      <RestaurantListContainer>
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
        {/* <Text>Home</Text>
        <Link href="/details">View details</Link> */}
      </RestaurantListContainer>
    </SafeArea>
  );
};
