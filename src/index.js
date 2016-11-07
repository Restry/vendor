/*eslint-disable import/default */
import 'babel-polyfill';
import 'matchmedia-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './routes';
import { loadNeeds } from './actions/needActions';
import { loadAuthors } from './actions/authorActions';
import * as utils from './selectors/utils';

import './styles/default.less';
import './styles/styles.css';

let bws = utils.browserInfo();
let history = bws.browserversion == 'ie9' ? hashHistory : browserHistory;


const store = configureStore();
store.dispatch(loadNeeds());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
