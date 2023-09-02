import React, { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  transformRestaurants,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (currentLocation) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(currentLocation)
        .then(transformRestaurants)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    if (location) {
      retrieveRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);

  const value = {
    restaurants,
    isLoading,
    error,
  };

  return (
    <ResturantsContext.Provider value={value}>
      {children}
    </ResturantsContext.Provider>
  );
};
