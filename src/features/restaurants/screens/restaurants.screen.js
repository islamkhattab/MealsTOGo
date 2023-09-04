import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  Spacer,
  spacerPostitions,
  spacerSizes,
} from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { ResturantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestuarantsScreen = ({ navigation }) => {
  navigation.removeListener();

  const { restaurants, isLoading } = useContext(ResturantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="blue" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position={spacerPostitions.bottom} size={spacerSizes.large}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestuarantDetail", { restuarant: item });
              }}
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
};
