import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from './todosSlice'

const reducer= combineReducers({
  todos: todosReducer
});

const store = configureStore({ reducer });

export default store
