import React, { Component } from 'react'
import "./style.css"
import { Button } from "reactstrap";


export class Register extends Component {
    render() {
        return (
             <div>
                 <br />
                <div>
                    <Button className="logtext" color="secondary">Login</Button>{' '}
                    <Button className="regitexts" color="secondary">Register</Button>{' '}
                </div>
             </div>
             )
          }
 
     }


export default Register;
