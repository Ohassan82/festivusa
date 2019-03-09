import React, { Component } from 'react';
import { Navbar, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './component/auth/Auth';


class App extends Component {
  render() {
    const auth = new Auth();
    auth.login();

    const { isAuthenticated } = this.props.auth;
   

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">FESTIVUS</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
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
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


  //   return(
  //     <Auth />
  //   )
  // }

  
  // goTo(route) {
  //   this.props.history.replace(`/${route}`)
  // }

  // login() {
  //   this.props.auth.login();
  // }

  // logout() {
  //   this.props.auth.logout();
  // }

  // componentDidMount() {
  //   const { renewSession } = this.props.auth;

  //   if (localStorage.getItem('isLoggedIn') === 'true') {
  //     renewSession();
  //   }
  // }

//   render() {
      
//     
  
  
  
  
  
  
  
  
  
//   // render() {

//   //   return (
//   //       <Router>
//   //         <div>
//   //           <Login />
//   //           <Switch>
//   //               <Route exact path="/" component={FirstPage} />
//   //               <Route exact path="/search" component={Events} />
//   //           </Switch>
//   //         </div>
//   //       </Router>

//       // <div className="App">
//       //   <Events />
//       // </div>
// //     );
// //   }
// // }

 export default App;
