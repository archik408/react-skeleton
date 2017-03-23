/**
 * @module Bound Action Creators/Second Page
 */


import {
  getData
} from '../../services/api';

import {
  getDataPending,
  getDataSuccess,
  getDataFail
} from '../action_creators/data';

/**
 * Is data loading
 * @param {Object} state - Application state
 * @returns {Boolean} Is loading flag
 */
function isDataLoading(state) {
  return state.FirstPage.data.loading;
}

/**
 * Bound getData action creators
 * @returns {function()} dispatcher caller
 */
export function boundGetData() {
  return (dispatch, getState) => {
    if (!isDataLoading(getState())) {
      dispatch(getDataPending());

      getData()
        .then(response =>
          dispatch(getDataSuccess(response.data))
        )
        .catch(error =>
          dispatch(getDataFail(error))
        );
    }
  };
}
