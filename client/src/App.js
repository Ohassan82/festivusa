import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login";
//import Form from "./component/form";
import FirstPage from "./pages/FirstPage"

 import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
 import Events from './Events';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Login />
            <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route exact path="/search" component={Events} />
            </Switch>
          </div>
        </Router>

      // <div className="App">
      //   <Events />
      // </div>
    );
  }
}

export default App;
