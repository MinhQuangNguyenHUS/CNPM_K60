import firebase from "firebase/index";
import {GoogleSignin} from "react-native-google-signin";
import {AccessToken, LoginManager, ShareDialog} from "react-native-fbsdk";

export default class GoogleServiceCommand{
    shareLinkContent = {
        contentType: 'link',
        contentUrl: "https://facebook.com",
        contentDescription: 'Wow, check out this great site!',
    };

    static googleSignIn(){
        // Add configuration settings here:
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
    };
    static googleSignOut(){
        GoogleSignin.signOut()
            .then(() => {
                console.log('out');
            })
            .catch((err) => {
                console.log(err)
            });
    }
    static facebookSignIn(){
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
    }
    static shareLinkWithShareDialog() {
        let tmp = this;
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
    static writeUserData(userId, name, email, imageUrl) {
        firebase.app().database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    static readUserData(userId: string) {
        firebase.app().database().ref('users/' + userId).on('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }
    static deleteUserData() {
        firebase.app().database().ref().remove();
    }

}
