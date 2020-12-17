import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		full_name: "",
		email: "",
		agenda_slug: "Moha",
		address: "",
		phone: ""
	});
	const handleChange = event => {
		setState({
			...state,
			[event.target.name]: event.target.value
		});
	};
	console.log(state);
	const handleSubmit = event => {
		event.preventDefault();
		actions.addData(state);
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" name="full_name" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" name="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" name="address" className="form-control" placeholder="Enter address" />
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
