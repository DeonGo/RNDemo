import React from 'react';
import {StackNavigation, StackNavigator} from 'react-navigation';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';

const RegNavigator = StackNavigator({
    Login:{screen: LoginScreen},
    Signup:{screen: SignupScreen},
})

export default RegNavigator;
 