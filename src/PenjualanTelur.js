import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup } from 'react-transition-group';
import Header from './Header';

class PenjualanTelur extends Component {
    constructor(){
		super();
		this.state = { penjualan : []};
	}

    addToDo = (e) => {
        e.preventDefault();
        let tanggal = this.refs.tanggal.value;
        let jumlah = this.refs.jumlah.value;
        let harga = this.refs.harga.value;
        let totaljual = jumlah * harga
        this.state.penjualan.push({tanggal, totaljual});
        this.setState({penjualan: this.state.penjualan});
        this.refs.formulir.reset();
        this.refs.tanggal.focus();
    }

    removeTodo = (i) => {
        console.log(i)
        console.log('melakukan remove')
        this.state.penjualan.splice(i,1);
        this.setState({ penjualan:this.state.penjualan})
        this.refs.formulir.reset()
        this.refs.tanggal.focus()
    }


	render(){
		return(
            <div className="App">
                <Header/>
            
                <form ref="formulir" className="form-inline">
                    <input type="text" className="form-control ml-3" type="date" size="8" ref="tanggal" placeholder="Tanggal"/>
                    <input type="text" className="form-control" size="8" ref="jumlah" placeholder="Jumlah(Kg)"/>
                    <input type="text" className="form-control" size="8" ref="harga" placeholder="Harga per Kg"/>
                    <button onClick={this.addToDo} className="btn btn-info">simpan</button>
                </form>
                <hr/>
                <div>
                    <ul>
                        {this.state.penjualan.map((data, i) =>
                        <li key={i}>
                            <TransitionGroup
                            transitionName="animasi"
                            transitionEnter={true}
                            transitionEnterTimeout={500}
                            transitionLeave={true}
                            transitionLeaveTimeout={500}>
                            <div className="todo-wrapper">
                            {data.tanggal} : Total penjualan <strong>Rp{data.totaljual} </strong>
                                <button onClick={()=>this.removeTodo(i)} className="button1 float-right">Hapus</button>
                            
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
export default PenjualanTelur;