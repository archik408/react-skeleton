import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={FirstPage} />
    <Route path="/2" component={SecondPage} />
  </Route>
);

export default routes;
