import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';
import axios from 'axios';

function App() {

	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data)
			})
			.catch((err) => {
				console.error(err);
			});
	})


	return (
		<>
			<Header />
			{
				users.map(user => {
					return (
						<div key={user.id}>{user.name}</div>
					)
				})
			}

		</>
	);
}

export default App;
