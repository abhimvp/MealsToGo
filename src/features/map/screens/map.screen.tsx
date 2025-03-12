import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { Search } from "../components/search.component";
import styled from "styled-components/native";
import { LocationContext } from "@/src/services/location/location.context";
import { RestaurantsContext } from "@/src/services/restaurants/restaurant.context";
import { useRouter } from "expo-router";
// import { MapCallout } from "../components/map-callout.component";
// import { CompactRestaurantInfo } from "@/src/components/restaurant/compact-restaurant-info.component";
import { Text, View } from "react-native";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const SomeText = styled(Text)`
  font-size: 20px;
`;

export const MapScreen = () => {
  const router = useRouter();
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0); // zoom level
  const { lat, lng, viewport } = location;

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
              onPress={() => {
                {
                  router.push({
                    pathname: "/(tabs)/(home)/details",
                    params: { restaurant: JSON.stringify(restaurant) },
                  });
                }
              }}
            >
              {/* <Callout>
                <CompactRestaurantInfo restaurant={restaurant} />
              </Callout>  - currently not going to work on android*/}
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
