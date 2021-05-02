import React, { Component } from 'react';

class ProgrammingJokes extends Component {
	constructor(){
		super();
		this.state = { users: []};
	}

	componentDidMount(){
		fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
		.then(response => response.json())
		.then((data) => {
			this.setState({ users: data});
		})
	}

	render(){
		return(

			<div>
				<h1>Programming Jokes</h1>
				
				{
					this.state.users.map((dinamis,key)=>
					<div key={dinamis.id}>
					<p> 
					<strong>{dinamis.setup}</strong>
					<p> {dinamis.punchline}</p>
					</p>
					
					</div>
					)
				}
			</div>
			);
		}
}

export default ProgrammingJokes;