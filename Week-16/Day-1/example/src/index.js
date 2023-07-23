import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./store";

//1.
const render = function() {
  ReactDOM.render(<App />, document.getElementById("root"))
} 

//2.
render()

//3. 
store.subscribe(render);