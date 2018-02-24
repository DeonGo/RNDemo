import React from 'react';
import {StackNavigation, StackNavigator} from 'react-navigation';

import DashboardScreen from '../screen/DashboardScreen';
import WWSScreen from '../screen/WWSScreen';

const LoggedInNavigator = StackNavigator({
    Dashboard:{screen: DashboardScreen},
    WWS:{screen: WWSScreen},
})

export default LoggedInNavigator;
 