import React from "react";
import MapView from "react-native-maps";
import { Search } from "../components/search.component";
import styled from "styled-components/native";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};
