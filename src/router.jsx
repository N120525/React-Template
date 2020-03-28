import App from './app'
import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import { Route, Switch, Redirect} from "react-router-dom";

class Routers extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/app" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/header" component={Header} />
          <Redirect to="/" from="/app" />
        </Switch>
    );
  }
}

export default Routers;
