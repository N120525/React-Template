import React from "react";
import { Link } from "react-router-dom";
import Routes from './router'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
         <h1 style={{textAlign:'center'}}>Welcome To React Template</h1>
        <Link to="/home">Home</Link> || <Link to="/header">Header</Link>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
