import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./router";
import { withTranslation } from "react-i18next";
import i18n from "./i18n";
import { connect } from "react-redux";

class App extends Component {
  changeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang',lng);
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.changeLanguage("de")}>de</button>
        <button onClick={() => this.changeLanguage("en")}>en</button>
        <h1>{this.props.t("Welcome to React")}</h1>
        <h1 style={{ textAlign: "center" }}>Welcome To React Template</h1>
        <Link to="/home">Home</Link> || <Link to="/header">Header</Link>
        <Routes />
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    message: store.sampleReducer.message
  };
};

export default withTranslation("translation")(connect(mapStateToProps)(App));
