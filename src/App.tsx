import { useEffect } from "react";
import GlobalStyle from "./styles/global";
import Container from "./styles/container";
import MyChart from "./components/chart/Chart";
import MyTable from "./components/table/Table";
import Count from "./components/count/Count";
import NavBar from "./components/nav-bar/NavBar";
import Details from "./pages/details/Details";
import { useDispatch, useSelector } from "react-redux";
import { fetchPermitsRequest } from "./_redux/actions/permitActions";
import { RootState } from "./_redux/reducers/rootReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { error, pending, permits } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPermitsRequest());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <NavBar />
            <Container>
              <MyChart chartData={permits} />
              <Count noOfPermits={permits.length} />
              {pending ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error</div>
              ) : (
                <MyTable tableData={permits} />
              )}
            </Container>
          </Route>
          <Route exact path={"/next"}>
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
