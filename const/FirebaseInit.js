import * as firebase from 'firebase';
export default class FirebaseInit {
    static firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyDQWwwG1OAzcz3b64Qbm-VTjA4a74D8MWY",
        authDomain: "timetable-645e5.firebaseapp.com",
        databaseURL: "https://timetable-645e5.firebaseio.com/",
        storageBucket: "timetable-645e5.appspot.com",
        appId: "1:302577875546:android:c7ce917b2127341e"
    });
}
