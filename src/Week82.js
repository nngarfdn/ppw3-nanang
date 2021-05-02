import React, { Component } from 'react';

class Week82 extends Component {
	constructor(){
		super();
		this.state = { users: []};
	}

	componentDidMount(){
		fetch("https://reqres.in/api/users")
		.then(response => response.json())
		.then((data) => {
			this.setState({ users: data.data});
		})
	}

	render(){
		return(

			<div>
				<h1>Hello ReqRes users..</h1>
				
				{
					this.state.users.map((dinamis,key)=>
					<div key={dinamis.id}>
					<p> 
					<strong>{dinamis.first_name}</strong>
					</p>

					<p> {dinamis.email}</p>
					<img key={dinamis.avatar} src={dinamis.avatar}/>
					</div>
					)
				}
			</div>
			);
		}
}

export default Week82;