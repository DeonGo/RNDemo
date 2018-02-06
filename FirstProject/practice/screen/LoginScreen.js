import React from 'react';
import { View, Text } from 'react-native';
import SplashPage from 'react-native-splash-screen';
import LoginContainer from '../container/LoginContainer'

class LoginScreen extends React.Component {

    componentDidMount = async () => {
        // this.timer = setTimeout(
        //     () => {
        //         SplashPage.hide()
        //     }
        //     , 8000
        // )

        // this.timer1 = setTimeout(
        //     () => {
        //         alert("hello")
        //     }
        //     , 3000
        // )
        await this.init();
        SplashPage.hide();
    }

    init = async () => {

    }

    componentWillUnmount() {
        // this.timer && clearTimeout(this.timer);  
        // this.timer1 && clearTimeout(this.timer1);  
    }

    static navigationOptions = {
        title: 'Login',
    }

    render() {
        return (
            <LoginContainer />
        )
    }
};

export default LoginScreen;
