import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';

export default class ValidateEmailView extends Component {
    /*
        this.state.password => Amazon password of user 
        this.state.username => Amazon email for user
    */
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: ""
        }
        this.ValidateEmail.bind(this);
    }
    /*
        After validation if email is valid it will login using 
        AVS.
    */
    onPress = () => {
        //this.props.navigation.navigate("Login");
        console.log(JSON.stringify(this.props.navigation.getParam('response', 'NO-ID').user.username))
        this.props.onValidation(this.state.verificationCode,this.props.navigation.getParam('response', 'NO-ID').user.username);
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
                <Text style={styles.VerificationCodeHeader}>Please enter verification code that you recieved in your email</Text>
                <TextInput
                    style={styles.SignupLabel}
                    onChangeText={(text) => {
                        this.setState({
                            verificationCode: text
                        })
                    }}
                    value={this.state.email}
                />
                <Button
                    onPress={this.onPress}
                    title="Verify"
                    style={styles.VerificationButton}
                />
               
            </View>
        );
    }
}
