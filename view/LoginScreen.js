import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from 'react-native-google-signin';
import LoginForm from "../component/LoginForm";
import GoogleServiceCommand from "../lib/GoogleServiceCommand";
import FirebaseInit from "../const/FirebaseInit";

export default class LoginScreen extends Component<{}> {
    static navigationOptions = ({
        header: null,
    });

    componentWillMount() {
        FirebaseInit.firebaseApp();
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
                                GoogleServiceCommand.facebookSignIn();
                            }}
                        >
                            <Image
                                source={require('../assets/image/_Path_.png')}
                                style={{height: 40, width: 40, marginTop: 30, marginRight: 20}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                GoogleServiceCommand.googleSignIn();
                            }}
                        >
                            <Image
                                source={require('../assets/image/_Group_.png')}
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
