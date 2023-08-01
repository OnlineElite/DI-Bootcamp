import {createStore, applyMiddleware} from 'redux'

import {reducer} from '../reducers/WeatherReducer'
import thunk from 'redux-thunk'
const initialState = {
    weatherData : null,
    error : null
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))