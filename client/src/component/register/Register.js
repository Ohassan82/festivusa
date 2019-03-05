import React, { Component } from 'react'
import { Card, Container } from "reactstrap";
import "./style.css"

export class Register extends Component {
 
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
 
 
    render() {
    return (
      <div>
          <Container>

        <Card className="register">
						<h2 className="h2-r">Register</h2>
						<br />
							<form className="formB">
								<p>First Name</p>
									<input 
                                        value={this.state.firstName}
                                        name="firstName"
									    onChange={this.handleInputChange}
									    type="text"
									    placeholder=""
									/>
                                <p>Last Name</p>    
                                    <input 
                                        value={this.state.firstName}
                                        name="firstName"
									    onChange={this.handleInputChange}
									    type="text"
									    placeholder=""
                                    />
                                <p>Last Name</p>    
                                    <input 
                                        value={this.state.firstName}
                                        name="firstName"
									    onChange={this.handleInputChange}
									    type="text"
									    placeholder=""
                                    />
                                <p>Last Name</p>    
                                    <input 
                                        value={this.state.firstName}
                                        name="firstName"
									    onChange={this.handleInputChange}
									    type="text"
									    placeholder=""
                                    />
                                <p>Last Name</p>    
                                    <input 
                                        value={this.state.firstName}
                                        name="firstName"
									    onChange={this.handleInputChange}
									    type="text"
									    placeholder=""
                                    />            
							</form>

					</Card>
            </Container>    
      </div>
    )
  }
}

export default Register
