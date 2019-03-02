import React, { Component } from "react";
import { Navbar, Container, NavbarBrand, Nav, NavLink, NavItem, 
          } from "reactstrap";
import { Form,  } from "react-bootstrap";         



class Login extends Component {
    render() {
        return (

        <div className="Login">
            
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">FESTIVUS ** Get together **</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Login</NavLink>
                                <NavLink href="">Sign In</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>

                <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>;
            
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