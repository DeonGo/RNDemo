import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


export default class LoginContainer extends React.Component {

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


    render() {
        return (
            <View>
                <TextInput placeholder="Username" onChangeText={
                    (text) => this.setState({ username: text })
                } />

                <TextInput placeholder="password" onChangeText={
                    (text) => this.setState({ pwd: text })
                } />

                <Button title="Login" onPress={() => {
                    this.setState({
                        isLoading: true,
                    })
                    this.login();
                }
                } />
            </View>
        )
    }

    login() {
        alert("username:" + this.state.username + "  pwd:" + this.state.pwd);
    }
};



// export default LoginContainer;