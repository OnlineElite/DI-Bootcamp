import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers";

import thunk from 'redux-thunk';

//new
const initialState = { weekday: "Monday", joke: null, err: null }

export const store = createStore(reducer, initialState, applyMiddleware(thunk));