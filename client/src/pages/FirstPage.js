import React, { Component } from "react";
//import Button from "../components/Button";
import { Container, Row } from "../component/grid/Grid";
import Form from "../component/form/Form";
import Register from "../component/register/Register"



export class FirstPage extends Component {
  render() {
    return (
      <Container Fluid>
        <Row col-sm-6>
          <Form />
        </Row>
        <Row col-sm-6>
          <Register />
        </Row>
      </Container>
    )
  }
}

export default FirstPage;
