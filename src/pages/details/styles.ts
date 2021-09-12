import styled from "styled-components";
import Card from "../../components/card/styles";

export const Header = styled.div`
  width: 100%;
  padding-bottom: 30px;
  padding-top: 20px;
  padding-left: 80px;
  border-bottom: 1px solid #eeeeee;
  position: relative;
`;

export const DetailContainer = styled(Card)`
  position: relative;
  display: grid !important;
  grid-template-columns: 70% 30%;
  /* justify-content: flex-start; */
  width: 95%;
  height: 95%;
  margin: 20px auto;
  padding: 0px;
`;

export const LeftItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailItem = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 20px 80px;
`;

export const RightItem = styled.div`
  background: #202124;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  height: 100%;
`;

export const JSONData = styled.textarea`
  width: 95%;
  height: 90%;
  color: rgb(46, 78, 207);
  border: none;
  background: inherit;
  line-height: 1.2rem;
  font-size: 1rem;
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: grid;
  place-items: center;
  background: white;
  box-shadow: rgb(0 18 46 / 16%) 0px 8px 36px 0px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
`;
