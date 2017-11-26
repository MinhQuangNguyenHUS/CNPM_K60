/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text, TextInput,
    View, Dimensions,
    Keyboard, TouchableOpacity, ScrollView
} from 'react-native';
const  {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Feather';
export default class LoginForm extends Component<{}> {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    getUsername(value){
        this.setState({
            username: value
        })
    }
    getPassword(value){
        this.setState({
            password: value
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.component}>
                    <Icon
                        name='user'
                        size={25}
                    />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="black"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=>{this.getUsername(value)}}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                    />
                </View>
                <View style={styles.component}>
                    <Icon
                        name='lock'
                        size={25}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        returnKeyType="go"
                        secureTextEntry={true}
                        onChangeText={(value)=>{this.getPassword(value)}}
                        underlineColorAndroid="transparent"
                        ref={(input) => this.passwordInput = input}
                        style={styles.input}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        width: width - 170,
        fontFamily: 'Montserrat-Light',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingLeft: 10,
    },
    container: {
        flexDirection: 'column',
    },
    component: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
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
