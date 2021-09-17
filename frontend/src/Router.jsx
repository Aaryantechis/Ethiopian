import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Places from "./containers/Places";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/places"} component={Places} />
      </Switch>
    </>
  );
};
export default Router;
