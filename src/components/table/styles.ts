import styled from "styled-components";
import Card from "../card/styles";

export const TableCard = styled(Card)`
  grid-area: table;
  color: red;
  height: 100%;
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  color: #a6a6a6;
  border-bottom: 1px solid gray;
`;

export const TRow = styled.tr`
  color: black;
  border-bottom: 1px solid gray;
  cursor: pointer;
  transition: .5s background ease-in-out;

  &:last-child {
    border: none;
  }

  &:hover {
    background: #dddddd;
  }
`;

export const TData = styled.td`
  color: black;
  text-align: left;
  display: table-cell;
  padding: 20px 24px;
`;

export const TH = styled.th`
  color: #a6a6a6;
  text-align: left;
  padding: 15px 24px;
`;

export const TBody = styled.tbody`
  text-align: left;
`;
