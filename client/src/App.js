import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
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
            <div>
            <Register />
            </div>
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