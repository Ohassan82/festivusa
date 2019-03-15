import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login";
//import Form from "./component/form";
import FirstPage from "./pages/FirstPage";
import EventDetail from "./component/eventDetail/EventDetail";

 import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
 import Events from './component/events/Events';
 import Search from './component/search/Search';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Login />
            <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route exact path="/search" component={Events} />
                {/* <Route exact path="/eventdetail" component={EventDetail} /> */}
                <Route path="/eventdetail/:id"
                  render={props => (
                    <EventDetail key={props.match.params.id} {...props} />
                  )}/>
            </Switch>
          </div>
        </Router>

    );
  }
}

export default App;

