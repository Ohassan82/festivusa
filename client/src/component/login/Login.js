import React, { Component } from "react";
import { Navbar, Container, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import "./style.css";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand className="texttype" href="/">FESTIVUS</NavbarBrand>

                    </Container>
                </Navbar>
            </div>
            //     <div className="Login">
            //         {/* <form onSubmit={this.handleSubmit}>
            //   <FormGroup controlId="email" bsSize="large">
            //     <FormLabel>Email</FormLabel>
            //     <FormControl
            //       autoFocus
            //       type="email"
            //       value={this.state.email}
            //       onChange={this.handleChange}
            //     />
            //   </FormGroup>
            //   <FormGroup controlId="password" bsSize="large">
            //     <FormLabel>Password</FormLabel>
            //     <FormControl
            //       value={this.state.password}
            //       onChange={this.handleChange}
            //       type="password"
            //     />
            //   </FormGroup> */}
            //   <Button
            //     block
            //     bsSize="large"
            //     disabled={!this.validateForm()}
            //     type="submit"
            //   >
            //     Login
            //   </Button>
            // {/* </form> */}

            //     </div>
        );
    }
}

export default Login;