import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './public/components/App';
import GameBoard from './public/components/GameBoard';

const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App } />
      <Route path='game' component={ GameBoard } />
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
