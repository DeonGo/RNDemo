import React from 'react';
import {StackNavigation, StackNavigator} from 'react-navigation';


import MainScreen from './screen/MainScreen';
import ProfileScreen from './screen/ProfileScreen';

const AppStack = StackNavigator({
    Main:{screen: MainScreen},
    Profile:{screen: ProfileScreen},
})

export default AppStack;
