import React from 'react';
import { Button } from "react-native";

class MainScreen extends React.Component{
    static navigationOptions ={
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button title="go to users' profile" onPress={() =>
                navigate('Profile', { name: 'pp' })}/>
        )
    }
}

export default MainScreen;