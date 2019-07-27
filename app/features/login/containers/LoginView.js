import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';

// import { navigateToHome } from 'app/navigation/NavigationHelpers';

export default class LoginView extends Component {
    /*
        this.state.password => Amazon password of user 
        this.state.username => Amazon email for user
    */
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.ValidateEmail.bind(this);
    }
    /*
        After validation if email is valid it will login using 
        AVS.
    */
    onPress = () => {
        // navigateToHome();
        {this.ValidateEmail(this.state.username) ? this.props.onLogin(this.state.username, this.state.password):null}
        console.log(this.state)
    };
    /*
        This function is used to validate if email is valid.
        Valid email => Returns true 
        invalid email => Return false 
    */
    ValidateEmail = ((mail) => {
        if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/).test(mail)) {
            alert("You have entered an invalid email address!")
            return false
        }
        else {
            return true;
        }
    })
    /*
        Render:
            Input for user name and password.
            onClick will be called when user click on login button
    */
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.LoginLabel}>Username</Text>
                <TextInput
                    style={styles.LoginLabel}
                    onChangeText={(text) => {
                        this.setState({
                            username: text
                        })
                    }}
                    value={this.state.username}
                />
                <Text style={styles.LoginLabel}>Password</Text>
                <TextInput
                    style={styles.LoginLabel}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                    value={this.state.password}
                />
                <Button
                    onPress={this.onPress}
                    title="Login"
                    style={styles.LoginButton}
                />
                <Text>Status: {this.props.status}</Text>
            </View>
        );
    }
}
