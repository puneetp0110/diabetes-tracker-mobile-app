import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';
import Amplify,{ Auth, API } from "aws-amplify";
// import { navigateToHome } from 'app/navigation/NavigationHelpers';

Amplify.configure({
    Auth: {
    
        identityPoolId: 'us-east-1:139f9494-bace-4c7e-9ebb-4a44b6db06b6',
    
        region: 'us-east-1',
     
        userPoolId: 'us-east-1_HxySkakCG', 
    
        userPoolWebClientId: '6trbnh8259eeteo6rto3j1k58p',
    },
    API: {
        endpoints: [
          {
            name: 'BloodSugar',
            endpoint: 'https://yzx2uzulb0.execute-api.us-east-1.amazonaws.com/',
            region: 'us-east-1'
          }
        ]
    }

});
export default class SignupView extends Component {
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
    onPress = () => {
        // navigateToHome();
        {this.ValidateEmail(this.state.email) ? this.props.onSignup(this.state.email, this.state.password):null}
        //console.log(this.state)
        //this.props.onSignup(this.state.email, this.state.password);  
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
                <Text style={styles.SignupLabel}>Email</Text>
                <TextInput
                    style={styles.SignupLabel}
                    onChangeText={(text) => {
                        this.setState({
                            email: text
                        })
                    }}
                    value={this.state.email}
                />
                <Text style={styles.SignupLabel}>Password</Text>
                <TextInput
                    style={styles.SignupLabel}
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
                    title="Sign Up"
                    style={styles.SignupButton}
                />
               
            </View>
        );
    }
}
