import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ContactCard } from "../component/ContactCard";

export const EditContac = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params, "estoy en params");
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

	const handleSubmit = event => {
		event.preventDefault();
		actions.editItems(params.id, state);
	};
	useEffect(() => {
		actions.getingInfos(params.id, setState);
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Change item</h1>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							className="form-control"
							placeholder="Full Name"
							value={state.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							placeholder="Enter email"
							value={state.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="phone"
							className="form-control"
							placeholder="Enter phone"
							value={state.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							className="form-control"
							placeholder="Enter address"
							value={state.address}
						/>
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
