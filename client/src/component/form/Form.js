import React, { Component } from 'react';
//import axios from "axios";
import { Card, Container } from "reactstrap";
import "./style.css";




class Form extends Component {
  
	state = {
		userName: "",
		password: "",

	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		if (name === "password") {
			value = value.substring(0,15);
		}

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (!this.state.userName) {
			alert ( "Please enter your Username ");
		} else {
			alert ('Hello! Welcome to FESTIVUS!');
		}

		this.setState({
			userName: "",
			password: ""
		});
	};
	render() {
	   return (
			<div>
				<Container>

					<Card className="login" >
						<h2 className="h2-l">Login</h2>
						<br />
						<form className="formA">
							<p className="uName">Username</p>
								<input
									value={this.state.username}
									name="userName"
									onChange={this.handleInputChange}
									type="text"
									placeholder=""
								/>
							<p className="pWord">Password</p>
								<input
									value={this.state.password}
									name="password"
									onChange={this.handleInputChange}
									type="password"
									placeholder=""
								/>

							</form>

					</Card>
				
				</Container>
				
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

