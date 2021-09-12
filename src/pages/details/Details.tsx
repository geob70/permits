// import { useEffect, useState } from "react";
import {
  DetailContainer,
  Header,
  LeftItem,
  DetailItem,
  JSONData,
  RightItem,
  BackArrow,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers/rootReducer";
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Details = () => {
  const { permits } = useSelector((state: RootState) => state.posts);

  const query = new URLSearchParams(useLocation().search);
  const index: string | null = query.get("index");

  return (
    <>
      {permits && permits.length > 0 && index ? (
        <DetailContainer>
          <LeftItem>
            <Header>
              <Link to={"/"}>
                <BackArrow>
                  <ArrowBackIcon />
                </BackArrow>
              </Link>
              <h1>ID</h1>
              <h4>{permits[parseInt(index)].id}</h4>
            </Header>
            {Object.entries(permits[parseInt(index)]).map(([key, value]) => (
              <DetailItem key={key}>
                <span>{key}</span>
                <span>
                  <strong>{value}</strong>
                </span>
              </DetailItem>
            ))}
          </LeftItem>
          <RightItem>
            <JSONData
              value={JSON.stringify(permits[parseInt(index)], undefined, 4)}
              contentEditable={false}
              readOnly={true}
            ></JSONData>
          </RightItem>
        </DetailContainer>
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
    </>
  );
};

export default Details;
