import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from "./LoginScreen";

export default Navigator = StackNavigator({
    loginScreen: {
        screen: LoginScreen
    }
});
