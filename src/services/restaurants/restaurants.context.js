import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  transformRestaurants,
} from "./restaurants.service";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest()
        .then(transformRestaurants)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
