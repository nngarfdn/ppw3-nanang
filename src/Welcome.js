import React, { Component } from 'react';

class Welcome extends Component {
	constructor(){
		super();
		this.state = { 
			nama: '-',
			alamat: '-',
			nohp:'-',
			email :'-'};
	}
	nama = (event) =>{
		this.setState({ nama : event.target.value})
	}
	alamat = (event) =>{
		this.setState({ alamat : event.target.value})
	}
	nohp = (event) =>{
		this.setState({ nohp : event.target.value})
	}
	email = (event) =>{
		this.setState({ email : event.target.value})}

	render(){
		return(

			<div>
				<h4>Nama : </h4>
				<input type="text" onChange={this.nama}/>
				<h4>Alamat : </h4>
				<input type="text" onChange={this.alamat}/>
				<h4>No Hp : </h4>
				<input type="text" onChange={this.nohp}/>
				<h4>Email : </h4>
				<input type="text" onChange={this.email}/>
				<h4>Selamat datang kepada :</h4>
				<h5>Nama : {this.state.nama} </h5> 
				<h5>Alamat : {this.state.alamat}</h5> 
				<h5>No HP : {this.state.nohp} </h5> 
				<h5>email : {this.state.email}</h5> 

			</div>
			)}}

export default Welcome;