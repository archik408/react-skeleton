/**
 * @module Reducers/Second Page
 */

import {
  GET_DATA_PENDING,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS
} from '../actions';


/**
 * Initial State
 * @type {Object}
 */
export const initialState = {
  data: { data: [], error: null, loading: false }
};

/**
 * Second Page Reducer
 * @function firstPageReducer
 * @param {Object} state - Application state
 * @param {Object} action - Specific action
 * @returns {Object} Updated state
 */
export function secondPageReducer(state = initialState, action) {
  switch (action.type) {
    // ********************* GET_DATA ******************************
    case GET_DATA_PENDING:
      return {
        ...state,
        data: {
          error: null,
          data: [],
          loading: true
        }
      };
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: {
          error: null,
          data: action.payload,
          loading: false
        }
      };
    }
    case GET_DATA_FAIL:
      return {
        ...state,
        data: {
          ...state.data,
          error: action.payload,
          loading: false
        }
      };

    default:
      return state;
  }
}
