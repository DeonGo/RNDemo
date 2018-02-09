import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import * as loginInteractor from '../interactor/LoginInteractor'
import { connect } from 'react-redux';



class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isSccuess: false,
            userProps: '',
            username: '',
            pwd: '',
        }
    }

    componentWillUpdate(nextProps, nextState){
        // if(nextProps.isSuccess){
        //     alert(nextProps.status);
        // }
    }


    render() {

        const { login } = this.props;

        if(this.props.isSuccess){
            alert(this.props.status);
        }
        return (
            <View>
                <Text>status:{this.props.status} </Text>
                <TextInput placeholder="Username" onChangeText={
                    (text) => this.setState({ username: text })
                } />

                <TextInput placeholder="password" onChangeText={
                    (text) => this.setState({ pwd: text })
                } />

                <Button title="Login" onPress={() => login(this.state.username, this.state.pwd)} />
            </View>
        )
    }

    // login() {
    //     alert("username:" + this.state.username + "  pwd:" + this.state.pwd);
    // }
};



// export default LoginContainer;

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: (name, pwd) => dispatch(loginInteractor.login(name, pwd))
    })

)(LoginContainer)