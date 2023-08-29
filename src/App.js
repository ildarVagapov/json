import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
	const [users, setUsers] = useState([])
	const [value, setValue] = useState('')

	const sortNameIncrement = () => {
		const sordedUsers = [...users]
		sordedUsers.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			return 0;
		});
		setUsers(sordedUsers)
	}

	const sortNameDecrement = () => {
		const sordedUsers = [...users]
		sordedUsers.sort((a, b) => {
			if (a.name > b.name) {
				return -1;
			}
			if (a.name < b.name) {
				return 1;
			}
			// a должно быть равным b
			return 0;
		});
		setUsers(sordedUsers)
	}

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			setUsers(res.data)
		});
	}, [])

	const onChangeInput = (str) => {
		setValue(str)
	}


	return (
		<>
			<div className="header">
				<input
					className='search'
					placeholder="search..."
					onChange={(e) => onChangeInput(e.target.value)}
					value={value}
				/>
			</div>
			<div className='name'>
				<button onClick={() => sortNameIncrement()}>Сортировка по: имени+</button>
				<button onClick={() => sortNameDecrement()}>Сортировка по: имени-</button>
			</div>
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
