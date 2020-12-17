const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contactInfos: [],
			deletItems: {},
			editItems: ""
		},
		actions: {
			loadingData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Moha")
					.then(res => res.json())
					.then(data => setStore({ contactInfos: data }))
					.catch(error => console.log(error));
			},
			addData: contact => {
				console.log(contact, "estoy en contact");
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",

					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => console.log(data, "estoy en data "))
					.catch(error => console.log("ERROR", error));
			},
			deleteData: () => {
				const store = getStore();
				const id = store.deletItems.id;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log("Success:", response);
						if (response.ok) {
							console.log(response.ok);
							getActions().loadingData();
						}
					})

					.catch(err => console.log(err));
			},
			keepitems: contact => {
				setStore({ deletItems: contact });
			},

			editItems(id, contact) {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(results => console.log(setStore({ contact: results }), "estoy en setStore"))
					.catch(error => console.log("Error", error));
			},
			getingInfos: (id, setState) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id)
					.then(res => res.json())
					.then(data => setState(data))
					.catch(error => console.log(error));
			}
		}
	};
};
resulte => {
	console.log("resulte", resulte);
	setStore({
		contact: resulte
	}).catch(error => console.log(error));
};

export default getState;
