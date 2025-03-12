import React from "react";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";
// CompactImage Component: The CompactImage component, defined as styled.
// Image, is responsible for rendering the image.
// react-native's Image component is designed to work across both Android and iOS platforms,
//  handling image display natively.  The styling applied to CompactImage
// ( border-radius, width, height) ensures the image is displayed compactly as intended.
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

interface CompactRestaurantInfoProps {
  restaurant: any;
  isMap: boolean;
}

export const CompactRestaurantInfo = ({
  restaurant,
}: CompactRestaurantInfoProps) => {
  const Image = CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
