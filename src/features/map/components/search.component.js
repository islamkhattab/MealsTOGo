import React, { useContext, useState, useEffect } from "react";
import { styled } from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location..."
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onEndEditing={() => {
          search(searchKeyword);
        }}
        icon="map"
      />
    </SearchContainer>
  );
};
