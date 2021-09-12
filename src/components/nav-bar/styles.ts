import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0px 40px;
  width: 95%;
  margin: 10px auto;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  border-color: rgb(226, 232, 240);
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 5px 0px;
`;

export const LeftItem = styled.h3`
  font-family: "Comic Neue", cursive;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
`;

export const RightItem = styled.div`
  display: flex;
`;

export const SearchItem = styled(RightItem)`
  align-items: center;
  border: 1px solid #ced4da;
  border-left-color: none;
  padding-left: 5px;
  border-radius: 5px 0px 0px 5px;
`;

export const SearchButton = styled.div`
  background: rgb(46, 78, 207);
  padding: 8px 20px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 14px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  outline: none;
  color: black;
  border: none;
  padding: 0px 5px;

  &:focus {
    outline: none;
  }
`;
