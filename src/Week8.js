import React, { Component } from 'react';

class Week8 extends Component {
	constructor(){
		super();
		this.state = { data: ''};
	}

	handleChange = (event) =>{
		this.setState({ data : event.target.value})
	}

	render(){
		return(

			<div>
				<input type="text" onChange={this.handleChange}/>
				<h2>{this.state.data}</h2>
			</div>

			)
	}
}

export default Week8;