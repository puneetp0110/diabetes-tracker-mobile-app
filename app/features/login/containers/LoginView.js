import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';

export default class LoginView extends Component {
    /*
        this.state.password => Amazon password of user 
        this.state.username => Amazon email for user
    */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            forgottenPasswordModalVisible: false
        }

        this.ValidateEmail.bind(this);
    }
    /*
        After validation if email is valid it will login using 
        AVS.
    */
    onLogin = () => {
        // navigateToHome();
        { this.ValidateEmail(this.state.email) ? this.props.onLogin(this.state.email, this.state.password) : null }
        //console.log(this.state)

    };

    onSignup = () => {
        this.props.navigation.navigate("Signup");
    }

    onForgottonPassword = () => {
        this.setState({
            forgottenPasswordModalVisible: true
        })
    }
    onForget = () => {
        { this.ValidateEmail(this.state.email) ? this.props.onForgottonPassword(this.state.email) : null }
    }
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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.forgottenPasswordModalVisible}
                    onRequestClose={() => {
                        this.setState({
                            forgottenPasswordModalVisible: false
                        })
                    }}>
                    <Text style={styles.ForgottenPasswordLabel}>Email</Text>
                    <TextInput
                        style={styles.ForgottenPasswordLabel}
                        onChangeText={(text) => {
                            this.setState({
                                email: text.toLowerCase()
                            })
                        }}
                        value={this.state.email}
                    />
                    <Button
                        onPress={this.onForgottonPassword}
                        title="Password Reset"
                        style={styles.ForgottenPasswordButton}
                    />
                </Modal>
                <Text style={styles.LoginLabel}>Email</Text>
                <TextInput
                    style={styles.LoginLabel}
                    onChangeText={(text) => {
                        this.setState({
                            email: text.toLowerCase()
                        })
                    }}
                    value={this.state.email}
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
                    onPress={this.onLogin}
                    title="Login"
                    style={styles.LoginButton}
                />
                <Button
                    onPress={this.onSignup}
                    title="Sign up"
                    style={styles.SignupButton}
                />
                <Button
                    onPress={this.onForgottonPassword}
                    title="Forgotton Password"
                    style={styles.ForgottonPasswordButton}
                />
            </View>
        );
    }
}
