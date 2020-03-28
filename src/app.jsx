import React from "react";
import Routers from './router';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/">Home</Link> || <Link to="/header">Header</Link>
        </div>
        <Routers />
      </React.Fragment>
    );
  }
}

export default App;
