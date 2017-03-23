/**
 * @module Store
 *
 * @desc The object that brings together actions and reducers.
 * It's important to note that app only have a single store.
 * When you want to split your data handling logic,
 * you'll use reducer composition instead of many stores
 */

import { applyMiddleware, createStore, compose } from 'redux';
import redirect from '../middleware/redirect';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

const redirectMiddleware = redirect();

const tools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const middlewares = applyMiddleware(
  thunkMiddleware,
  redirectMiddleware
);
const store = createStore(reducers, compose(middlewares, tools));

export default store;
