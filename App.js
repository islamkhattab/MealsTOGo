import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { ResturantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { RestuarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ResturantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestuarantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ tabBarBadge: 2 }}
            />
          </Tab.Navigator>
          <ExpoStatusBar style="auto" />
        </NavigationContainer>
      </ResturantsContextProvider>
    </ThemeProvider>
  );
}
