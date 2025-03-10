import React from "react";
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
                    uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
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
