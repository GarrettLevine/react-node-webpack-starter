import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';

const history = createBrowserHistory();

export default class AppRouter extends React.Component { 
  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}
