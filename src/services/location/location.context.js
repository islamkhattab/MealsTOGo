import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword || !keyword.length) {
      // don't do anything
      return;
    }

    locationRequest(keyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((results) => {
        setIsLoading(false);
        setLocation(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  useEffect(() => {
    onSearch();
  }, []);

  const value = {
    keyword,
    location,
    isLoading,
    error,
    search: onSearch,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
