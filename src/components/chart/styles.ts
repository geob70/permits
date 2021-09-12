import styled from "styled-components";
import Card from "../card/styles";

export const ChartCard = styled(Card)`
  grid-area: chart;
  /* height: 35vh; */
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

export const CanvasContainer = styled.div`
  width: 30% !important;
  overflow: auto;
  height: 100% !important;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

export const LegendItem = styled.div`
  display: flex;
  margin: 10px 0px;

  span {
    margin-left: 10px;
  }
`;

export const Box = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background: ${(props) => props.color};
`;
