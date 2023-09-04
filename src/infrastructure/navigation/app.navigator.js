import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "ios-restaurant",
  Map: "ios-map",
  Settings: "ios-settings",
};

const createScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = `${TAB_ICON[route.name]}`;

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarBadge: 2 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
