import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    ForgotPasswordLabel: {
        borderColor: 'gray', 
        borderWidth: 1, 
        fontSize: 20, 
        padding:4,
        alignItems: "stretch",
        margin:10,
        textAlign:"center"
    },
    ForgotPasswordButton: {
        color:"#841584",
        alignItems: "stretch",
        margin:10,
        textAlign: "center"
    }
});

export default styles;
