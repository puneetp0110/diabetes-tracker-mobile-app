import React, { Component } from 'react';
import SignupView from './SignupView';
import { connect } from 'react-redux';
import * as signupActions from '../actions';
class SignupContainer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            verificationCodeSent: false
        }
    }
    render() {
        console.log(JSON.stringify(this.props))
        return <SignupView {...this.props}/>
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return { onSignup: (email, password) => dispatch(signupActions.requestSignup(email, password)) };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupContainer);
