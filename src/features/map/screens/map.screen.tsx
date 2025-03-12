import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Search } from "../components/search.component";
import styled from "styled-components/native";
import { LocationContext } from "@/src/services/location/location.context";
import { RestaurantsContext } from "@/src/services/restaurants/restaurant.context";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0); // zoom level
  const { lat, lng, viewport } = location;
  //   console.log(location);
  //   console.log(viewport);

  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
    }
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};
