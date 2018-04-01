import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/profile" component={App} />
      <Redirect from="/" to="/profile" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
