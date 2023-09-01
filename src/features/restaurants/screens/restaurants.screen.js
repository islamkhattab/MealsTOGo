import * as React from "react";
import { styled } from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  Spacer,
  spacerPostitions,
  spacerSizes,
} from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestuarantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search..." />
      </SearchContainer>
      <RestaurantList
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 10 },
          { id: 11 },
          { id: 12 },
          { id: 13 },
          { id: 14 },
          { id: 15 },
          { id: 16 },
          { id: 17 },
          { id: 18 },
          { id: 19 },
          { id: 20 },
          { id: 21 },
        ]}
        renderItem={() => (
          <Spacer position={spacerPostitions.bottom} size={spacerSizes.large}>
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
