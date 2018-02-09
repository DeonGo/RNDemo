import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';

import App from './container/LoginContainer';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}