import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/UsersData', async () => {
	const data = await axios.get('https://jsonplaceholder.typicode.com/users')
	console.log(data)
	return data
})

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
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.error.message
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'received'
				state.users = action.payload.data
			})
	}
})

export const { setUsers } = usersSlice.actions
export const usersReducer = usersSlice.reducer