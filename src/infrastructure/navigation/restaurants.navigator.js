import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestuarantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestuarantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <RestaurantsStack.Screen
        name="Restuarants"
        component={RestuarantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestuarantDetail"
        component={RestuarantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
