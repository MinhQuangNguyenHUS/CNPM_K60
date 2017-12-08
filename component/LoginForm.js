import React, {Component} from 'react';
import {
    StyleSheet,
    Text, TextInput,
    View, Dimensions, TouchableOpacity
} from 'react-native';
const  {height, width} = Dimensions.get('window');
import * as firebase from 'firebase';
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
                        onSubmitEditing={() => {
                            this.passwordInput.focus()
                        }}
                        ref={(input) => this.usernameInput = input}
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
                <TouchableOpacity
                    onPress={() => {
                        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
                            alert("Login fail with: " + error);
                        });
                        this.usernameInput.clear();
                        this.passwordInput.clear();
                    }}
                    style={{borderColor: 'black',
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginTop: 25,
                        height: 35, width: 135,
                        alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text style={{fontFamily: 'Montserrat-Light', color: 'black'}}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 36,
        width: width - 170,
        fontFamily: 'Montserrat-Light',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingLeft: 10,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    component: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
    },
});
