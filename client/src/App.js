import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login";
import FirstPage from "./pages/FirstPage"
import "bootstrap/dist/css/bootstrap.min.css";
import Events from './Events';
import Auth from './component/auth/Auth';


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

      
    );
  }
}

export default App;
