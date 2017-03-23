/**
 * @module Reducers
 *
 * @desc Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response.
 * This is the job of a reducer
 */

import { combineReducers } from 'redux';
import { firstPageReducer } from './firstPage';
import { secondPageReducer } from './secondPage';

export default combineReducers({
  FirstPage: firstPageReducer,
  SecondPage: secondPageReducer
});
