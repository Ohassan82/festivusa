import React, { Component } from 'react';
import './App.css';
import Login from "./component/login";
import Form from "./component/form";
import { BrowserRouter, Route } from "react-router-dom";   


import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div>
          <Route exact = { true } path="/login" render={() => (
            <div>
              <Login />
              </div>
          )}/>
           <Route exact = { true } path="/" render={() => (
            <div>
              <Form />
              </div>
          )}/>
        </div>
     </BrowserRouter>

      
    );
  }
}


export default App;
