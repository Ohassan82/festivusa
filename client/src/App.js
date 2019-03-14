import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Login from "./component/login";
//import FirstPage from "./pages/FirstPage";
//import EventDetail from "./component/eventDetail/EventDetail";
//import Events from './component/events/Events';
//import Search from './component/search/Search';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          {/* <Navbar.Header> */}
            <Navbar.Brand>
              <a href="/">FESTIVUS</a>
            </Navbar.Brand>
            <Button
              bsstyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          {/* </Navbar.Header> */}
        </Navbar>
      </div>
        // <Router>
        //   <div>
        //     <Login />
        //     <Switch>
        //         <Route exact path="/" component={FirstPage} />
        //         <Route exact path="/search" component={Events} />
        //         {/* <Route exact path="/eventdetail" component={EventDetail} /> */}
        //         <Route path="/eventdetail/:id"
        //           render={props => (
        //             <EventDetail key={props.match.params.id} {...props} />
        //           )}/>
        //     </Switch>
        //   </div>
        // </Router>

    );
  }
}

export default App;
