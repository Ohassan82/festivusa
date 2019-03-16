import React, { Component } from 'react';
//import axios from "axios";
import { Button } from "reactstrap";
import "./style.css";




class Form extends Component {
  
	render() {
	   return (
			<div>
				<br />
				<div className="homeButtoms">

      			</div>
			</div>
			)
		 }

	}

	// 	<div className="SignupForm">
	// 		<h4>Sign up</h4>
	// 		<form className="form-horizontal">
	// 			<div className="form-group">
	// 				<div className="col-1 col-ml-auto">
	// 					<label className="form-label" htmlFor="username">Username</label>
	// 				</div>
	// 				<div className="col-3 col-mr-auto">
	// 					<input className="form-input"
	// 						type="text"
	// 						id="username"
	// 						name="username"
	// 						placeholder="Username"
	// 						value={this.state.username}
	// 						onChange={this.handleChange}
	// 					/>
	// 				</div>
	// 			</div>
	// 			<div className="form-group">
	// 				<div className="col-1 col-ml-auto">
	// 					<label className="form-label" htmlFor="password">Password: </label>
	// 				</div>
	// 				<div className="col-3 col-mr-auto">
	// 					<input className="form-input"
	// 						placeholder="password"
	// 						type="password"
	// 						name="password"
	// 						value={this.state.password}
	// 						onChange={this.handleChange}
	// 					/>
	// 				</div>
	// 			</div>
	// 			<div className="form-group ">
	// 				<div className="col-7"></div>
	// 				<button
	// 					className="btn btn-primary col-1 col-mr-auto"
	// 					onClick={this.handleSubmit}
	// 					type="submit"
	// 				>Sign up</button>
	// 			</div>
	// 		</form>
	// 	</div>

	// )














//   // handle any changes to the input fields
//   handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, prevent the default event and alert the username and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
//     this.setState({ username: "", password: "" });
//   };

//   

export default Form;

