import React from 'react';
import backAndroid, {
    hardwareBackPress,
    exitApp
  } from 'react-native-back-android'
import { StackNavigation, StackNavigator } from 'react-navigation';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import LoggedInNavigator from './LoggedInNavigator';



const RegNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    LoggedIn: {
        screen: LoggedInNavigator,
        navigationOptions: {
            header: null,
        },
    }
})


//https://github.com/react-navigation/react-navigation/issues/1815

const prevGetStateForAction = RegNavigator.router.getStateForAction;

RegNavigator.router.getStateForAction = (action, state) => {
  
    // don't allow back from 'EditReport'
    if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'LoggedIn') {
      // additional logic here to save draft data
      // used this.props.navigation.setParams in the Screen
      // and state.routes[state.index].params here
      exitApp();

      
      return null;
    }
  
    return prevGetStateForAction(action, state);
  };

export default RegNavigator;
