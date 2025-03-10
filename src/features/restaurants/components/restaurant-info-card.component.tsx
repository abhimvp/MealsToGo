import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

// here we are using styled components to style the text.
const Title = styled.Text`
  margintop: ${(props) => props.theme.space[0]};
  color: ${(props) => props.theme.colors.ui.primary};
  marginleft: ${(props) => props.theme.space[2]};
`;
// here we are using styled components to style the Card component.
const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  fontweight: bold;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardText = styled.Text`
  padding: 2px;
  marginleft: ${(props) => props.theme.space[2]};
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title> {name}</Title>
      <CardText>{address}</CardText>
      <CardText>{openingHours}</CardText>
    </RestaurantCard>
  );
};
