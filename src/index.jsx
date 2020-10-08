import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';

import App from './components/app';
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selectedFlatReducer';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
})

const middleWares = applyMiddleware(logger, reduxPromise);

//for every key in the redux state tree you have a single reducer doing the job of handling it

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middleWares)}>
      <App />
    </Provider>, root
  )
}
