import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValidateEmailView from './ValidateEmailView';
import * as ValidateEmailActions from '../actions'
class ValidateEmailContainer extends Component {
    
    constructor(props){
        super(props)
    }
    render() {
        return <ValidateEmailView {...this.props}/>;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return { onValidation: (code,email) => dispatch(ValidateEmailActions.requestVerification(code,email)) };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidateEmailContainer);
