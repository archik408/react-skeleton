/**
 * @module Router Service
 *
 * @desc Provide opportunity to navigate
 * between routes
 */


import history from '../history';

/**
 * Open First Page
 * @returns {void}
 */
export function goToFirstPage() {
  history.push('/');
}

/**
 * Open Second Page
 * @returns {void}
 */
export function goToSecondPage() {
  history.push('/2');
}
