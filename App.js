/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AccessToken, LoginManager } from 'react-native-fbsdk';
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
// import firebase from 'react-native-firebase'
firebase.initializeApp({
    apiKey: "AIzaSyDQWwwG1OAzcz3b64Qbm-VTjA4a74D8MWY",
    authDomain: "timetable-645e5.firebaseapp.com",
    databaseURL: "https://timetable-645e5.firebaseio.com/",
    storageBucket: "timetable-645e5.appspot.com",
});
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {
    fbAu(){
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled){
                    alert("Login cancelled")
                } else {
                    AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                        const credential = firebase.auth().FacebookAuthProvider.credential(accessTokenData.accessToken);
                        firebase.auth().signInWithCredential(credential).then((result) => {

                        }, (error) => {
                            console.log('error');
                        })
                    }, (error => {
                        console.log("Some error occured: " + error)
                    }))
                }
            },
            function (error) {
                alert('Login fail with error: ' + error)
            }
        )
    }
    constructor(){
        super();
        // this.writeUserData('01', 'Dang Tien Quy', 'quyruatq1997@gmail.com', 'C:\\Users\\Dell Precision\\Desktop\\check\\834900.png');
        // this.readUserData('01')
        // this.deleteUserData();
        this.fbAu();
    }
    writeUserData(userId, name, email, imageUrl) {
        firebase.app().database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    readUserData(userId: string) {
        firebase.app().database().ref('users/' + userId).on('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }
    deleteUserData() {
        firebase.app().database().ref().remove();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
