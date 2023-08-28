import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUsers, setUsers } from './redux/usersSlice';

function App() {
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.users)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				dispatch(setUsers(data))
			})
	}, [])


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
