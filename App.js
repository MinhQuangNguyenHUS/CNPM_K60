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
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import LoginForm from "./LoginForm";
// import firebase from 'react-native-firebase'
firebase.initializeApp({
    apiKey: "AIzaSyDQWwwG1OAzcz3b64Qbm-VTjA4a74D8MWY",
    authDomain: "timetable-645e5.firebaseapp.com",
    databaseURL: "https://timetable-645e5.firebaseio.com/",
    storageBucket: "timetable-645e5.appspot.com",
    appId: "1:302577875546:android:c7ce917b2127341e"
});
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {
    shareLinkContent = {
        contentType: 'link',
        contentUrl: "https://facebook.com",
        contentDescription: 'Wow, check out this great site!',
    };
    fbAu=()=>{
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled){
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
    }
    shareLinkWithShareDialog() {
        var tmp = this;
        ShareDialog.canShow(this.shareLinkContent).then(
            function(canShow) {
                if (canShow) {
                    return ShareDialog.show(tmp.shareLinkContent);
                }
            }
        ).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Share cancelled');
                } else {
                    alert('Share success with postId: '
                        + result.postId);
                }
            },
            function(error) {
                alert('Share fail with error: ' + error);
            }
        );
    }
    componentWillMount(){
        // this.fbAu();
        // this.shareLinkWithShareDialog();
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
                <LinearGradient colors={['#d4faf7', '#e4efd2', '#fcdb93']} style={styles.linnear}>
                    <LoginForm/>
                    <LoginButton
                        publishPermissions={["publish_actions"]}
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    alert("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    alert("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            alert(data.accessToken.toString())
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => alert("logout.")}
                    />
                </LinearGradient>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linnear: {
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
