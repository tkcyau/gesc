import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Route } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
