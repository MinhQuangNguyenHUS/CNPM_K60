/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AccessToken, LoginManager, LoginButton, ShareDialog } from 'react-native-fbsdk';
import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text, TextInput,
    View, Dimensions
} from 'react-native';
const  {height, width} = Dimensions.get('window');
export default class LoginForm extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="black"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    returnKeyType="go"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'Times New Roman'
    },
    container: {
        padding: 20,
        width: width - 100
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
