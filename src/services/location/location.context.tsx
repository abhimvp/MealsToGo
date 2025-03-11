import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword="aNtwerp") => {
    console.log(searchKeyword); // (NOBFRIDGE) LOG  aNtwerp
    setIsLoading(true);
    setKeyword(searchKeyword);
    
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        // console.log(result); // (NOBRIDGE) LOG  {"lat": 37.7749295, "lng": -122.4194155}
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{ keyword, location, isLoading, error, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
