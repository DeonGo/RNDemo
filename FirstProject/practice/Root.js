import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';

// import App from './container/LoginContainer';
import LoginPage from './screen/LoginScreen';

import RegNavigator from './navigator/RegistrationNavigator';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RegNavigator/>
      </Provider>
    )
  }
}