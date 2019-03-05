import React, { Component } from "react";
import { Container, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
         
  
   



class Login extends Component {

    state = {

    }


    render() {
        return (
            <div className="Login">
                 <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">FESTIVUS ** Get together **</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Login</NavLink>
                                <NavLink  href="/">Sign In</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            
        //         <form onSubmit={this.handleSubmit}>
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
        //   </FormGroup>
        //   <Button
        //     block
        //     bsSize="large"
        //     disabled={!this.validateForm()}
        //     type="submit"
        //   >
        //     Login
        //   </Button>
        // </form>

            
        );
    }
}

export default Login;