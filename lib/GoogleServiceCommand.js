import firebase from "firebase/index";
import {GoogleSignin} from "react-native-google-signin";
import {ShareDialog} from "react-native-fbsdk";

export default class GoogleServiceCommand extends Component<{}> {
    shareLinkContent = {
        contentType: 'link',
        contentUrl: "https://facebook.com",
        contentDescription: 'Wow, check out this great site!',
    };

    public static googleSignIn = () => {
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
    public static googleSignOut(){
        GoogleSignin.signOut()
            .then(() => {
                console.log('out');
            })
            .catch((err) => {
                console.log(err)
            });
    }
    public static shareLinkWithShareDialog() {
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
    public static writeUserData(userId, name, email, imageUrl) {
        firebase.app().database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    public static readUserData(userId: string) {
        firebase.app().database().ref('users/' + userId).on('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }
    public static deleteUserData() {
        firebase.app().database().ref().remove();
    }

}
