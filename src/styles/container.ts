import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: 0px auto;
  padding: 20px 0px;
  display: grid;
  grid-template-areas:
    "chart chart chart chart count"
    "table table table table table";
  gap: 20px;
  /* background: red; */
`;

export default Container;
