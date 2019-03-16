
import React, { Component } from "react";
import { Container, Button } from "reactstrap";

class theme extends Component {
    render() {
        return (
            <div className="landing">
                <Container>
                    <Button color="secondary">Sign Up</Button>{' '}
                    <Button color="secondary">Login</Button>{' '}
                </Container>
            </div>
        );
    }
}
export default theme;