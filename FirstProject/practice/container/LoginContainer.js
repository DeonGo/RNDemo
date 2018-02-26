import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import * as loginInteractor from '../interactor/LoginInteractor'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'



class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: '',
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // if(nextProps.isSuccess){
        //     alert(nextProps.status);
        // }
    }

  componentWillUnmount(){
      this.props.ClearLoginStatus();
  }


    render() {
        const { navigate } = this.props.navigation;
        const { login } = this.props;

        if (this.props.isSuccess) {
            alert(this.props.status);
            navigate('LoggedIn');
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
                <Button title="Signup" onPress={() => navigate('Signup', { name: 'Signup' })} />
            </View>
        )
    }

    // login() {
    //     alert("username:" + this.state.username + "  pwd:" + this.state.pwd);
    // }
};



// export default LoginContainer;

export default connect(
    // (props) => ({
    //     // status: props.loginIn.status,
    //     // isSuccess: props.loginIn.isSuccess,
    //     // user: props.loginIn.user,
    //     ...props.loginIn
    // }),
    (state) => (state.loginIn),
    (dispatch) => (bindActionCreators(loginInteractor, dispatch))

)(LoginContainer)