import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


class HomePage extends React.Component{

	constructor(){
		super();
		this.state = { users: []};
	}


	componentWillMount(){
		console.log('----ini akan dipasang')

		const url = 'http://jsonplaceholder.typicode.com/photos'

		//asyncronus
		axios.get(url)
		.then(users => {
			console.log('--- ini data sudah diambil')
			console.log(users.data)
			this.setState({
				users : users.data
			})
		})
	}

	render(){ 
		console.log('----Component sedang dipasang') 
		return( 
			<div> 
			{
				this.state.users.map((user, idx) => {
					return (
						<div >
						<Card style={{ width: '75rem'}}>
							<Card.Img variant="top" src= {user.thumbnailUrl}  style={{ height: '20rem'}} />
							<Card.Body>
								<Card.Title>Album { user.albumId }</Card.Title>
									<Card.Text>
										{ user.title }
							</Card.Text>
							</Card.Body>
						</Card>
						</div>


						)
				})
			} 


			

			</div> 
			) 

	}

}

export default HomePage;