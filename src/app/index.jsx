// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App test={1} />,
  // $FlowFixMe: suppressing this error until figure out
  document.getElementById('app'), // eslint-disable-line
);
