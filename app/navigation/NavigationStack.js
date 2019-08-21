import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { View, Image } from 'react-native';
import Images from 'app/images/index';
import Login from 'app/features/login/containers/LoginContainer';
import Home from 'app/features/home/containers/HomeContainer';
import Signup from 'app/features/signup/containers/SignupContainer';
import ValidateEmail from 'app/features/validateemail/containers/ValidateEmailContainer';
import ShowBloodSugarHistory from 'app/features/showbloodsugar/containers/ShowBloodSugarContainer';
import ShowHistory from 'app/features/showhistory/containers/ShowHistoryContainer';
const AuthenticatedStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <View style={{}}><Image source={focused ? Images.tabHome : Images.homeService} style={{ width: 30, height: 33 }}></Image></View>;
      },
      header: null
    }),
  },
  ShowBloodSugarHistory: {
    screen: ShowBloodSugarHistory,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Image source={focused ? Images.deviceSelect : Images.devicesUnselect} style={{ width: 21, height: 26 }}></Image>;
      },
      header: null
    })
  },
  ShowHistory: {
    screen: ShowHistory,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Image source={focused ? Images.usersSelect : Images.usersUnselect} style={{ width: 32, height: 26 }}></Image>;
      },
      header: null
    })
  },
}, {
    tabBarOptions: {
      inactiveTintColor: '#008abc',
      tintColor: '#0c3471',
      showLabel: false,
      style: {
        height: 65,
        padding: 5
      },
    }
  });
const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
    Signup: {
      screen: Signup,
      navigationOptions: { header: null }
    },
    ValidateEmail: {
      screen: ValidateEmail,
      navigationOptions: { header: null }
    },
    AuthenticatedStack: {
      screen: AuthenticatedStack,
      navigationOptions: { header: null }
    },
    ShowHistory: {
      screen: ShowHistory,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(RNApp);
