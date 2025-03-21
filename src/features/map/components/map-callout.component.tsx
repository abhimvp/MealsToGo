import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "@/src/components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
