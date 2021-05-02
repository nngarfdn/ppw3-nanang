import React, { Component } from 'react';

class Lifecycle extends Component {
	constructor(props){
		super(props);
		this.state = { 
			hitung : 1
		};
	console.log('constructor')
	}

	static getDerivedStateFromProps(props, state){
		console.log('getDerivedStateFromProps')
		return null
	}

	componentDidMount(){
		console.log('componentDidMount')
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(preProps, preState){
		console.log('getSnapshotBeforeUpdate')
	}

	componentDidUpdate(preProps, preState, snapshot){
		console.log('componentDidUpdate')
		this.setSate({hitung:2})
	}

	componentWillUnmount(){
		console.log('componentWillUnmount')
	}

	render(){
		console.log('render');
		return(
			<button>Analisa -> {this.state.hitung}</button>
		);

	}
}

export default Lifecycle;