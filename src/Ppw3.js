import React, { Component } from 'react';
import './App.css';


class Ppw3 extends Component {
	constructor(props){
		super(props);
		this.state = { join : 'Silahkan join '};
	}

	joined = () => {
		this.setState({ join : 'Terimakasih sudah join '});
	}

	render(){
		return(

			<div className="warna">
				{this.state.join} <br/>
				{this.props.jenis} {this.props.nama}
				<br/>
				<button onClick={this.joined}>Join</button>
			</div>	

			);
	}
}


export default Ppw3;