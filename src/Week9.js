import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup } from 'react-transition-group';
import Header from './Header';


class Week9 extends Component {

    constructor(){
		super();
		this.state = { todos : []};
	}

    addToDo = (e) => {
        e.preventDefault();
        let jam = this.refs.jam.value;
        let aktivitas = this.refs.aktivitas.value;
        this.state.todos.push({jam, aktivitas});
        this.setState({todos: this.state.todos});
        this.refs.formulir.reset();
        this.refs.jam.focus();
    }

    removeTodo = (i) => {
        console.log(i)
        console.log('melakukan remove')
        this.state.todos.splice(i,1);
        this.setState({ todos:this.state.todos})
        this.refs.formulir.reset()
        this.refs.jam.focus()
    }


	render(){
		return(
            <div className="App">
                <Header/>
                <h3>Log Aktivitas harian</h3>
                <form ref="formulir" className="form-inline">
                    <input type="text" className="form-control" size="8" ref="jam" placeholder="jam aktivitas"/>
                   <input type="text" className="form-control" size="30" ref="aktivitas" placeholder="jenis aktivitas"/>
                    <button onClick={this.addToDo} className="btn btn-info">simpan</button>
                </form>
                <hr/>
                <div>
                    <ul>
                        
                        {this.state.todos.map((data, i) =>
                        <li key={i}>
                            <TransitionGroup
                            transitionName="animasi"
                            transitionEnter={true}
                            transitionEnterTimeout={500}
                            transitionLeave={true}
                            transitionLeaveTimeout={500}>
                            <div className="todo-wrapper">
                            {data.jam} : {data.aktivitas} 
                                <button onClick={()=>this.removeTodo(i)} className="btn btn-outline-danger">Hapus</button>
                               
                            </div>
                            </TransitionGroup>
                        </li>
                        )}
                       
                    </ul>
                </div>
            </div>

			)
	}
}

export default Week9;