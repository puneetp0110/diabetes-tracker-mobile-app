import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    LoginLabel: {
        borderColor: 'gray', 
        borderWidth: 1, 
        fontSize: 20, 
        padding:4,
        alignItems: "stretch",
        margin:10,
        textAlign:"center"
    },
    LoginButton: {
        color:"#841584",
        alignItems: "stretch",
        margin:10,
        textAlign: "center"
    },
    SignupButton: {
        color:"#841584",
        alignItems: "stretch",
        margin:10,
        textAlign: "center"
    },
    ForgottenPasswordButton: {
        color:"#841584",
        alignItems: "stretch",
        margin:10,
        textAlign: "center"
    },
    ForgottenPasswordLabel: {
        borderColor: 'gray', 
        borderWidth: 1, 
        fontSize: 20, 
        padding:4,
        alignItems: "stretch",
        margin:10,
        textAlign:"center"
    }
});

export default styles;
