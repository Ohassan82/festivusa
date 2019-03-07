import React, { Component } from "react";
//import Button from "../components/Button";
import { Container, Row } from "../component/grid/Grid";
import Form from "../component/form/Form";
import Register from "../component/register/Register";
import { Col } from "reactstrap";



export class firstPage extends Component {
  render() {
    return (
      <Container Fluid>
        <Row >
          <Col sm="6">
          <Form />
          </Col>
        </Row>
        <Row >
        <Col sm="6">
          <Register />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default firstPage;
