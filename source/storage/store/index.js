import { createStore, applyMiddleware, combineReducers } from 'redux';
import multipleActionsMiddleware from './middleware/multiple-actions';
import promiseMiddleware from './middleware/promise';
import rootReducer from '../reducer';

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(multipleActionsMiddleware, promiseMiddleware)
);

export default store;
