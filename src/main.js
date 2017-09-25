import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import App from './containers/app/App';


function run() {
  render(
    <App />,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept('./containers/app/App.js', () => {
    setTimeout(run());
  })
}

run();
