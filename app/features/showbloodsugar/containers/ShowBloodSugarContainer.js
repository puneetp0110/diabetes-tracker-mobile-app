import React, { Component } from 'react';
import ShowBloodSugarView from './ShowBloodSugarView';
import { connect } from 'react-redux';
import * as showBloodSugarActions from '../actions';
class ShowBloodSugarContainer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            verificationCodeSent: false
        }
    }
    render() {
        console.log(JSON.stringify(this.props))
        return <ShowBloodSugarView {...this.props}/>
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBloodSugarContainer);
