import React, { Component } from "react";
import { Security, ImplicitCallback } from '@okta/okta-react';

class Button extends Component {
    handleClick = () => {
        this.props.onClickFunction()
    }
 
    render() {
        return(
            <button onClick={this.handleClick}>Submit</button>
        )
    }
}
export default Button;