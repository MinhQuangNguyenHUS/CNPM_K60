import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from "./view/LoginScreen";
import HomeScreen from "./view/HomeScreen";

export default Navigator = StackNavigator({
    loginScreen: {
        screen: LoginScreen
    },
    homeScreen: {
        screen: HomeScreen
    },
},
    {
        initialRouteName: 'loginScreen'
    }
);
