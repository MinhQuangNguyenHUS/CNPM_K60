import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from "./view/LoginScreen";
import HomeScreen from "./view/HomeScreen";
import ListView from "./view/ListView";
import AddTaskScreen from "./view/AddTaskScreen";
export default Navigator = StackNavigator(
    {
    loginScreen: {
        screen: LoginScreen
    },
    homeScreen: {
        screen: HomeScreen
    },
    listScreen: {
        screen: ListView
    },
    addTaskScreen: {
        screen: AddTaskScreen
    }
},
    {
        initialRouteName: 'loginScreen'
    }
);
