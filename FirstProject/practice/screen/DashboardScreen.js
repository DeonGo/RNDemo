import React from 'react';
import { View, Text, Platform, ToastAndroid, BackHandler } from 'react-native';
// import { BackAndroid, Platform } from "react-native"

const lastBackPressed = Date.now();


class DashboardScreen extends React.Component {
    static navigationOptions = {
        title: 'DashboardScreen',
    }

    componentDidMount(){
        if(Platform.OS === 'android') BackHandler.addEventListener('hardwareBackPress',this._onBackPressed)
    }

    componentWillUnmount(){
        if(Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed);
    }

    _onBackPressed() {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            BackHandler.exitApp();
          }
          lastBackPressed = Date.now();
          ToastAndroid.show('press one more time to exit.', ToastAndroid.SHORT);
          return true;
      }

    

    render() {
        return (
            <View>
                <Text>Dashboard</Text>
            </View>
        )
    }
};

export default DashboardScreen;