import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
