import { createStore } from "redux";

import {reducer} from '../reducers/transactionReducer'

let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions'))
}

export const store = createStore(reducer, initialState)

