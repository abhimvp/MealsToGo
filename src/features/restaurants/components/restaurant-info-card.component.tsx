import React from "react";
import { useRouter } from "expo-router";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
  Open,
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

// here we get the restaurant name from search bar
export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant; //here restaurant is the object so we got to destructure it.
  const router = useRouter();
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // https://docs.expo.dev/router/advanced/stack/#set-screen-options-dynamically
  return (
    <RestaurantCard
      elevation={5}
      onPress={() => {
        router.push("/(tabs)/(home)/details");
      }}
    >
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {/* here we are mapping the ratingArray to display the stars */}
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow && (
                  <Open key={"isOpennow"} xml={open} width={20} height={20} />
                )}
              </Spacer>

              <Spacer position="left" size="medium">
                <Icon
                  source={{
                    uri: icon,
                  }}
                />
              </Spacer>
              {/*Concept of SPacer: Better to use View ,, bcoz we want elements to push other elements aside.*/}
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
