import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";

class Routers extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/header" component={Header} />
          <Redirect to="/home" from="/" />
        </Switch>
    );
  }
}

export default Routers;
