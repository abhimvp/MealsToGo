import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
// here we get the restaurant name from search bar
export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "My Restaurant", // for testing purpose initially defaulting values here before we get data from google API later.
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    openingHours = "8:00 AM - 9:00 PM",
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant; //here restaurant is the object so we got to destructure it.
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.cover}
      />
      <Title> {name}</Title>
      <Text>{address}</Text>
      <Text>{openingHours}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "yellow",
    fontWeight: "bold",
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    marginTop: 4,
    backgroundColor: "orange",
  },
});
