import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import {createStore, combineReducers} from "redux";

import '../assets/stylesheets/application.scss';

import App from './components/app';
import flatsReducers from './reducers/flat_reducer';
const reducers = combineReducers({
  flats: flatsReducers, 
})

//for every key in the redux state tree you have a single reducer doing the job of handling it

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, root
  )
}
