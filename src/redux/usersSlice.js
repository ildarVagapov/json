import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUsers = createAsyncThunk('users/UsersData', () => {
// 	const data = axios.get('https://jsonplaceholder.typicode.com/users')
// 	console.log(data)
// 	return data
// })

const initialState = {
	users: [],
	status: 'loading'
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload
		}
	},
})

export const { setUsers } = usersSlice.actions
export const usersReducer = usersSlice.reducer