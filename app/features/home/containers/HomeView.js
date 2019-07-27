import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNAvs from 'react-native-avs';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    testing = (()=>{
        RNAvs;
    })
    render() {
        return (
            <View>
                <Text> HomeView </Text>
            </View>
        );
    }
}
