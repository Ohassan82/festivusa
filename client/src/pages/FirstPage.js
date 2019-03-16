import React, { Component } from "react";
//import Button from "../components/Button";
import { Container, Row } from "../component/grid/Grid";
import Form from "../component/form/Form";
import Register from "../component/register/Register"
import "../App.css";

export class firstPage extends Component {
  render() {
    return (
      <Container className="container" Fluid>
        <Row col-md-3>
        <Form />
        </Row>
        <Row col-md-3>
        <Register />
        </Row>
      </Container>
    )
  }
}

export default firstPage;
