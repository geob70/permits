// import React from 'react';
import {
  LeftItem,
  Nav,
  RightItem,
  SearchInput,
  SearchItem,
  SearchButton,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";

function NavBar() {
  return (
    <>
      <Nav>
        <LeftItem>Permits</LeftItem>
        <RightItem>
          <SearchItem>
            <SearchIcon />
            <SearchInput type="text" placeholder="search permits" />
          </SearchItem>
          <SearchButton>search</SearchButton>
        </RightItem>
      </Nav>
    </>
  );
}

export default NavBar;
