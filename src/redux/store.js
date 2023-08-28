import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";

const reducer = combineReducers({
	users: usersReducer,
});

export const store = configureStore({ reducer, devTools: true })

