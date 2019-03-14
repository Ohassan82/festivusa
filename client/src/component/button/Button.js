import React, { Component } from "react";

// class Button extends Component {
//     handleClick = () => {
//         this.props.onClickFunction()
//     }
 
//     render() {
//         return(
//             <button onClick={this.handleClick}> LET'S GET STARTED!</button>
//         )
//     }
// }

const Button = (props) => {
    return (
      <div className="button">
      <form onSubmit={props.handleSearch}>
                <input  onChange = {props.handleSearchText}type="text"/>
                <button type="submit">LET'S GET STARTED!</button>
            </form>
      </div>
    )
}
export default Button;