import React, { Component } from 'react'
//import { Card, Container } from "reactstrap";
import "./style.css"

export class Register extends Component {
 
    constructor(props){
        super(props);
    
          this.setState = {
            isLogin: true
          }
      }
      
      
      render() {
        const {isLogin} = this.setState;
        const title = isLogin? 'Sign In' : 'Sign Up';
        return (
          <div className="app-login-form">
            <div className="app-login-form-inner">
              <button onClick={() => {
    
                if (this.props.onClose) {
                  this.props.onClose(true);
                }
    
    
              }}
                className="app-dismiss-button">Close</button>
              <h2 className="form-title">{title}</h2>
              <form>
              {
                !isLogin ? <div>
                      <div className="app-form-item">
                        <label htmlFor="name-id">Email</label>
                       <input placeholder="Your Name" id="name-id" type="name" name="name"></input>
                </div>
    
                </div>: null
              }
    
    
                <div className="app-form-item">
                  <label htmlFor="email-id">Email</label>
                  <input placeholder="Your email address" id="email-id" type="email" name="email"></input>
                </div>
                <div className="app-form-item">
                  <label htmlFor="password-id">Password</label>
                  <input placeholder="Your password" id="password-id" type="password" name="password"></input>
                </div>
    
                {
                  !isLogin ? <div>
                       <div className="app-form-item">
                          <label htmlFor="confirm-password-id">Confirm Password</label>
                          <input placeholder="Confirm Your password" id="confirm-password-id" type="password" name="confirm-password"></input>
                        </div>
    
    
                  </div>: null
                }

                {
                    isLogin ?  <div className="app-form-item">
                    <button className="app-button-primary">Sign In</button>
                      <div className="app-form-description">
                         <div>Don't have an account?
                         <button type="button" onClick={() => {
                        
                        this.setState({isLogin: false});
      
                      }}className="app-button app-button-link">Sign up</button>
                         </div>
                     
                    </div>
                  </div>:  <div className="app-form-item">
                  <button className="app-button-primary">Sign Up</button>
                    <div className="app-form-description">
                       <div>Don't have an account?
                       <button type="button" onClick={() => {
                      
                      this.setState({isLogin: true});
    
                    }}className="app-button app-button-link">Sign In</button>
                       </div>
                   
                  </div>
                </div>
                }

               
              </form>
            </div>
          </div>
        )
      }
    }

    

export default Register;

// state = {
    //     firstName: "",
    //     lastName: "",
    //     userName: "",
    //     email: "",
    //     password: ""
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // };
 
 
    // render() {
    // return (
    //     <div className="app-login-form">
    //         <div className="app-login-form-inner">
    //             <button onClick={() => {

    //                 if (this.props.onClose){
    //                     this.props.onClose(true);
    //                 }
    //             }}className="app-dismiss-button">Close</button>
    //             <h2 className="form-title">Sign In</h2>
    //                 <form>
    //                     <div className="app-form-item">
    //                         <label htmlFor="email-id">Email</label>
    //                         <input placeholder="Your email address" id="email-id" type="email" name="email"></input>
    //                     </div>
    //                     <div className="app-form-item">
    //                         <label htmlFor="password">Email</label>
    //                         <input placeholder="Your password" id="password-id" type="password" name="password"></input>
    //                     </div>
    //                 </form>

    //         </div>
    //     </div>
    //   <div>
    //       <Container>

    //     <Card className="register">
	// 					<h2 className="h2-r">Register</h2>
	// 					<br />
	// 						<form className="formB">
	// 							<p>First Name</p>
	// 								<input 
    //                                     value={this.state.firstName}
    //                                     name="firstName"
	// 								    onChange={this.handleInputChange}
	// 								    type="text"
	// 								    placeholder=""
	// 								/>
    //                             <p>Last Name</p>    
    //                                 <input 
    //                                     value={this.state.lastName}
    //                                     name="lastName"
	// 								    onChange={this.handleInputChange}
	// 								    type="text"
	// 								    placeholder=""
    //                                 />
    //                             <p>Username</p>    
    //                                 <input 
    //                                     value={this.state.userName}
    //                                     name="userName"
	// 								    onChange={this.handleInputChange}
	// 								    type="text"
	// 								    placeholder=""
    //                                 />
    //                             <p>email</p>    
    //                                 <input 
    //                                     value={this.state.email}
    //                                     name="email"
	// 								    onChange={this.handleInputChange}
	// 								    type="text"
	// 								    placeholder=""
    //                                 />
    //                             <p>password</p>    
    //                                 <input 
    //                                     value={this.state.password}
    //                                     name="password"
	// 								    onChange={this.handleInputChange}
	// 								    type="text"
	// 								    placeholder=""
    //                                 />            
	// 						</form>

	// 				</Card>
    //         </Container>    
    //   </div>
//     )
//   }
// }
