import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import NeedsPage from './components/need/NeedsPage';
import RegisterPage from './components/account/register';
import LoginPage from './components/account/Login';
import ManageNeedPage from './components/need/ManageNeedPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="needs" component={NeedsPage} />
      <Route path="need" component={ManageNeedPage} />
      <Route path="need/:id" component={ManageNeedPage} />
      <Route path="about" component={AboutPage} />
    </Route>
    <Route path="login" component={LoginPage} />
      <Route path="register" component={RegisterPage} />

  </Route>
);
