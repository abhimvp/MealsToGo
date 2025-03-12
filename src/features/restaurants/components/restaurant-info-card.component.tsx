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
import { Favourite } from "@/src/components/favourites/favourite.component";

interface Restaurant {
  name: string;
  icon?: string;
  photos: string[];
  address: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
  placeId: string;
}

export const RestaurantInfoCard = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;
  const validRating = typeof rating === "number" ? rating : 0;
  const ratingArray = Array.from(new Array(Math.floor(validRating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant}/>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
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
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
