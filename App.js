import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet } from "react-native";

import { RestuarantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
