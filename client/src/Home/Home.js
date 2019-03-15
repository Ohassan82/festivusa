import React, { Component } from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <div>
              <h4>
                You are logged in, have fun!
              </h4>
              
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                Welcome to FESTIVUS! Please{' '}
                <href
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </href>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
