import React, { useState, useMemo, useEffect, createContext } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9] }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
