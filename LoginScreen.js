import {AccessToken, LoginManager} from 'react-native-fbsdk';
import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View, Image
} from 'react-native';
import * as firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from 'react-native-google-signin';
import LoginForm from "./LoginForm";
// import firebase from 'react-native-firebase'

export default class LoginScreen extends Component<{}> {
    static navigationOptions = ({
        header: null,
    });

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDQWwwG1OAzcz3b64Qbm-VTjA4a74D8MWY",
            authDomain: "timetable-645e5.firebaseapp.com",
            databaseURL: "https://timetable-645e5.firebaseio.com/",
            storageBucket: "timetable-645e5.appspot.com",
            appId: "1:302577875546:android:c7ce917b2127341e"
        });
        GoogleSignin.configure({
            webClientId: '302577875546-12nn1tss9bjdjqpugc8t7s5rtt8nvfmu.apps.googleusercontent.com',
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <LinearGradient colors={['#eaeaea', '#eaeaea']} style={styles.linnear}>
                    <Text style={{fontSize: 40, color: 'black', marginTop: 20, fontFamily: 'Montserrat-Light'}}>App Name</Text>
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
                    <LoginForm/>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={() => {
                                return LoginManager.logInWithReadPermissions(['public_profile']).then(
                                    function (result) {
                                        if (result.isCancelled) {
                                            alert('Login cancelled');
                                        } else {
                                            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                                                const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
                                                firebase.auth().signInWithCredential(credential).then((result) => {
                                                }, (error) => {
                                                    alert(error)
                                                })
                                            }, (error => {
                                                console.log('Some error occured: ' + error);
                                            }))
                                        }
                                    }, function (error) {
                                        alert('Login fail with error: ' + error);
                                    }
                                )
                            }}
                        >
                            <Image
                                source={require('./assets/image/_Path_.png')}
                                style={{height: 40, width: 40, marginTop: 30, marginRight: 20}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                return GoogleSignin.configure()
                                    .then(() => {
                                        GoogleSignin.signIn()
                                            .then((data) => {
                                                // create a new firebase credential with the token
                                                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

                                                // login with credential
                                                return firebase.auth().signInWithCredential(credential)
                                            })
                                            .then((currentUser) => {
                                                console.info(JSON.stringify(currentUser.toJSON()))
                                            })
                                            .catch((error) => {
                                                console.error(`Login fail with error: ${error}`)
                                            })
                                    })
                            }}
                        >
                            <Image
                                source={require('./assets/image/_Group_.png')}
                                style={{height: 35, width: 55, marginTop: 30, marginLeft: 20}}
                            />
                        </TouchableOpacity>
                    </View>
                    {/*<LoginButton*/}
                        {/*publishPermissions={["publish_actions"]}*/}
                        {/*onLoginFinished={*/}
                            {/*(error, result) => {*/}
                                {/*if (error) {*/}
                                    {/*alert("login has error: " + result.error);*/}
                                {/*} else if (result.isCancelled) {*/}
                                    {/*alert("login is cancelled.");*/}
                                {/*} else {*/}
                                    {/*AccessToken.getCurrentAccessToken().then(*/}
                                        {/*(data) => {*/}
                                            {/*alert(data.accessToken.toString())*/}
                                        {/*}*/}
                                    {/*)*/}
                                {/*}*/}
                            {/*}*/}
                        {/*}*/}
                        {/*onLogoutFinished={() => alert("logout.")}*/}
                    {/*/>*/}
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
});
