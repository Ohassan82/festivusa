import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login";
import Home from "./pages/Home";
import FirstPage from "./pages/FirstPage"
import Auth from './auth/Auth.js';

 import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import Events from './Events';

class App extends Component {
 

  render() {
    const auth = new Auth();
    auth.login();
    return (
        <Router>
          <div>
          
            <Login />
            <Switch>
              <Route exact path="/Home" component={Home} />
                <Route exact path="/" component={FirstPage} />
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
