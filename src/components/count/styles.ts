import styled from "styled-components";
import Card from "../card/styles";

export const CountCard = styled(Card)`
  grid-area: count;
  color: black;

  h3 {
    font-size: 20px;
    line-height: inherit;
    text-align: center;
    /* width: 300px; */
  }

  span {
    font-weight: bolder;
    font-size: 40px;
  }
`;
