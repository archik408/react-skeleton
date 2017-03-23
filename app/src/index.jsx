import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from './store/configureStore';
import routes from './routes';
import history from './history';

import 'material-design-icons/iconfont/material-icons.css';
import '../index.html';
import './components/_typography.scss';
import '../assets/iconStyles/icons.css';

/**
 * Bootstrap React Application
 * @returns {void}
 */
function bootstrap() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
  );
}

bootstrap();
