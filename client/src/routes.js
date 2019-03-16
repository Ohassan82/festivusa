import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
//import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import EventDetail from "./component/eventDetail/EventDetail";
import Events from './component/events/Events';
import { Redirect } from 'react-router-dom';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
return <Redirect to='/callback' />

  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          
          <Route path="/eventdetail/:id"
                  render={props => (
                    <EventDetail key={props.match.params.id} {...props} />
                  )}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Events {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
