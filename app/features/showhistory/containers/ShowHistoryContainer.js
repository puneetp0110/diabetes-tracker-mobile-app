import React, { Component } from 'react';
import ShowHistoryView from './ShowHistoryView';
import { connect } from 'react-redux';
import * as showHistoryActions from '../actions';
class ShowHistoryContainer extends Component {
    
    constructor(props){
        super(props)
    }
    render() {
        return <ShowHistoryView {...this.props}/>
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowHistoryContainer);
