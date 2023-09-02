import React, { useContext, useState } from "react";
import { styled } from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearch = (query) => {
    setSearchKeyword(query);
    search(query);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location..."
        onChangeText={onChangeSearch}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
