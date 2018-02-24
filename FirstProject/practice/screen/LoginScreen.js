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

        // SplashPage.hide();
    }

    init = async () => {
        //    let response = await fetch('http://www.qq.com');
        await setTimeout(() => {
            SplashPage.hide();
        }, 3000)
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
            // <LoginContainer {...this.props}/>
            <LoginContainer navigation ={this.props.navigation}/>
        )
    }
};

export default LoginScreen;
