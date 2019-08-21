import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';
export default class ForgotPasswordView extends Component {
    /*
       this.state.password => Amazon password of user 
       this.state.username => Amazon email for user
   */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.ValidateEmail.bind(this);
    }
    /*
        After validation if email is valid it will login using 
        AVS.
    */
    onVerification = () => {
        // navigateToHome();
        { this.ValidateEmail(this.state.email) ? this.props.onLogin(this.state.email, this.state.password) : null }
        //console.log(this.state)

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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.ForgotPasswordLabel}>Email</Text>
                <TextInput
                    style={styles.LoginLabel}
                    onChangeText={(text) => {
                        this.setState({
                            email: text.toLowerCase()
                        })
                    }}
                    value={this.state.email}
                />
                <Button
                    onPress={this.onVerification}
                    title="Verification"
                    style={styles.ForgotPasswordButton}
                />
            </View>
        );
    }
}
