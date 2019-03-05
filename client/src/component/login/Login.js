import React, { Component } from "react";



class Login extends Component {
    render() {
        return (
                    <Container>
                        <NavbarBrand href="/">FESTIVUS ** Get together **</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            
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