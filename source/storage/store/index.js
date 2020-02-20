import { createStore, applyMiddleware, combineReducers } from 'redux';
import multipleActionsMiddleware from './middleware/multiple-actions';
import promiseMiddleware from './middleware/promise';
import rootReducer from '@/storage/reducer/_index';

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(multipleActionsMiddleware, promiseMiddleware)
);

export default store;
