import { createStore, applyMiddleware } from 'redux';
import rootReduser from './root.reducer';

const middlewares = [];


export const store = createStore(rootReduser, applyMiddleware(...middlewares));

export default store;