import React, { Component } from 'react';

class Week81 extends Component {
	constructor(){
		super();
		this.state = { 
			member : [
				{
					id:1,
					nama:'Naruto Uchiha',
				},
				{
					id:2,
					nama:'Kazekage Boruto',
				},
				{
					id:3,
					nama: 'Hatake Sikamaru',
				}

			]
		}
	}

	render(){
		return(

			<div>
				<h1>Ranking Member 2021</h1>
				{
					this.state.member.map((dinamis,key)=>
					<div>
						<h2>{dinamis.id} {dinamis.nama}</h2>
					</div> 
					)
				}
			</div>

			);
		}
}

export default Week81;