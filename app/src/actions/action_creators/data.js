/**
 * @module Action Creators/Data
 */

import {
  GET_DATA_PENDING,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS
} from '../index';

// ********************* DATA ******************************
/**
 * Create GET_DATA_PENDING action
 * @see GET_DATA_PENDING
 * @returns {Object} New action
 */
export function getDataPending() {
  return {
    type: GET_DATA_PENDING
  };
}

/**
 * Create GET_DATA_FAIL action
 * @see GET_DATA_FAIL
 * @param {Object} payload - Error details
 * @returns {Object} New action
 */
export function getDataFail(payload) {
  return {
    type: GET_DATA_FAIL,
    payload
  };
}

/**
 * Create GET_DATA_SUCCESS action
 * @see GET_DATA_SUCCESS
 * @param {Object} payload - data
 * @returns {Object} New action
 */
export function getDataSuccess(payload) {
  return {
    type: GET_DATA_SUCCESS,
    payload
  };
}
