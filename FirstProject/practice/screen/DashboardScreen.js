import React from 'react';
import { View, Text } from 'react-native';
// import { BackAndroid, Platform } from "react-native"


class DashboardScreen extends React.Component {
    static navigationOptions = {
        title: 'DashboardScreen',
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