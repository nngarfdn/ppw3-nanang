import React, { Component } from 'react';
import './App.css';


class Tugas4 extends Component {
	constructor(props){
		super(props);
		this.state = { data : 'Ayo Dipinjam', peminjam : 'Belum ada' };

	}

	pinjambuku = () => {
		this.setState({ data : 'Terimakasih sudah pinjam ' , peminjam : 'Nanang Arifudin'});
	}

	kembalibuku = () => {
		this.setState({ data : 'Terimakasih sudah mengembalikan ' , peminjam : 'Belum ada'});
	}

	render(){
		return(
			<div className="warna">
			judul 	  :<b> {this.props.judul} </b><br/>
			penulis   : {this.props.penulis} <br/>
			penerbit  : {this.props.penerbit} 
			<br/>
			<br/>
			{this.state.data}   <br/>
			Peminjam : {this.state.peminjam} <br/>

			<button onClick={this.pinjambuku}>Pinjam</button><br/>

			<button onClick={this.kembalibuku}>Kembalikan</button>
			</div>	

			);
	}
}

export default Tugas4;