/* eslint-disable prettier/prettier */
import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";

export const RestuarantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search..." />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: "blue",
  },
});
