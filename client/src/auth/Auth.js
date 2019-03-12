import React, { Component } from 'react';
import auth0 from 'auth0-js';

export class Auth extends Component {
  



  auth0 = new auth0.WebAuth({
    domain: 'YOUR_DOMAIN',
    clientID: 'YOUR_CLIENT_ID',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
  
  
    render() {
    return (
    
    )
  };


export default Auth

