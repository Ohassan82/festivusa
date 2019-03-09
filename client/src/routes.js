import React from "react";
import { Route, Router } from 'react-router-dom';
import App from './App';
import Auth from './component/auth/Auth';
import history from './history';
import Callback from './callback/Callback';
//import Home from './Home/Home';
import Search from './Search';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }

export const makeMainRoutes = () => {

    return (
        <Router history={history}>
          <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/search" render={(props) => <Search auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          </div>
        </Router>
    );
  }
  