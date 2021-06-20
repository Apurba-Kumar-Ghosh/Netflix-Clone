import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import * as Routes from "./constants/Routes";
import { Home, Signin, Signup, Browse } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={Routes.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={Routes.BROWSE}>
          <Browse />
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
