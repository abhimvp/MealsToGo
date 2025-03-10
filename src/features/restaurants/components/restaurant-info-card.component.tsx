import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// here we are using styled components to style the text.
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
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

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray); // (NOBRIDGE) LOG  [undefined, undefined, undefined, undefined]
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {/* here we are mapping the ratingArray to display the stars */}
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
