import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View, Image, Dimensions, TextInput
} from 'react-native';

const {width} = Dimensions.get('window');
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from 'react-native-google-signin';
import ServiceCommand from "../lib/ServiceCommand";
import FirebaseInit from "../const/FirebaseInit";

export default class LoginScreen extends Component<{}> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    getUsername(value) {
        this.setState({
            username: value
        })
    }

    getPassword(value) {
        this.setState({
            password: value
        })
    }

    componentWillMount() {
        FirebaseInit.firebaseApp();
        GoogleSignin.configure({
            webClientId: '302577875546-12nn1tss9bjdjqpugc8t7s5rtt8nvfmu.apps.googleusercontent.com',
        });
    }

    static navigate() {
        this.props.navigation.navigate('homeScreen')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <LinearGradient colors={['#eaeaea', '#eaeaea']} style={styles.linnear}>
                    <Text style={{fontSize: 40, color: 'black', marginTop: 20, fontFamily: 'Montserrat-Light'}}>App
                        Name</Text>
                    <TouchableOpacity
                        style={{
                            width: 120,
                            height: 120,
                            backgroundColor: 'white',
                            borderRadius: 100,
                            marginTop: 20,
                            marginBottom: 35
                        }}
                        onPress={() => {
                            GoogleSignin.signOut()
                                .then(() => {
                                    console.log('out');
                                })
                                .catch((err) => {
                                    console.log(err)
                                });
                        }}>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
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
                                onChangeText={(value) => {
                                    this.getUsername(value)
                                }}
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
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                underlineColorAndroid="transparent"
                                ref={(input) => this.passwordInput = input}
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then(() => {
                                    this.props.navigation.navigate('homeScreen', {data: this.state.username});
                                }).catch(function (error) {
                                    alert("Login fail with: " + error);
                                });
                                this.usernameInput.clear();
                                this.passwordInput.clear();
                            }}
                            style={{
                                borderColor: 'black',
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderRadius: 10,
                                marginTop: 25,
                                height: 35, width: 135,
                                alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <Text style={{fontFamily: 'Montserrat-Light', color: 'black'}}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={() => {
                                ServiceCommand.facebookSignIn().then(() => {
                                    this.props.navigation.navigate('homeScreen', {data: ServiceCommand.getUserDataFb()});
                                });
                            }}
                        >
                            <Image
                                source={require('../assets/image/_Path_.png')}
                                style={{height: 40, width: 40, marginTop: 30, marginRight: 20}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                ServiceCommand.googleSignIn().then(() => {
                                    this.props.navigation.navigate('homeScreen', {data: ServiceCommand.getGoogleUser()});
                                });
                            }}
                        >
                            <Image
                                source={require('../assets/image/_Group_.png')}
                                style={{height: 35, width: 55, marginTop: 30, marginLeft: 20}}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linnear: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        height: 36,
        width: width - 170,
        fontFamily: 'Montserrat-Light',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingLeft: 10,
    },
    component: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
    },
});
