import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";



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
        <Navbar>

      

        
            <Navbar.Brand>
              <a href="/">FESTIVUS</a>
            </Navbar.Brand>
            <Button
              bsstyle="danger"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="danger"
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
                    bsstyle="danger"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            } 
        </Navbar>
      </div>
     
  )
}

export default App;

