import createHashHistory from 'history/lib/createHashHistory';
import { useRouterHistory } from 'react-router';

const canUseDOM =
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Create Router History
 * @param {function()} createHistory - History Factory Method
 * @returns {Object} Application History
 */
function createRouterHistory(createHistory) {
  let history = void 0;
  if (canUseDOM) history = useRouterHistory(createHistory)({ queryKey: false });
  return history;
}


export default createRouterHistory(createHashHistory);
