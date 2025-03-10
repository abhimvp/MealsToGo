import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;
// here we get the restaurant name from search bar
export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "My Restaurant", // for testing purpose initially defaulting values here before we get data from google API later.
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"], // showuld check later why photos[0] isn't displaying picture at all. TODO
    address = "100 some random street",
    isOpenNow = true,
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
        <Section>
          <Rating>
            {/* here we are mapping the ratingArray to display the stars */}
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              )}
              <Spacer variant="left.large" />
              {isOpenNow && (
                <Open key={"isOpennow"} xml={open} width={20} height={20} />
              )}
              <Spacer variant="left.large" />
              {/*Concept of SPacer: Better to use View ,, bcoz we want elements to push other elements aside.*/}
              <Image
                style={{ width: 15, height: 15 }}
                source={{
                  uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
                }}
              />
            </SectionEnd>
          </Rating>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
