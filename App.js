import React, {Component} from 'react';
import {
    StyleSheet, View,
} from 'react-native';
// import Navigator from "./Navigator";
// import AppFooter from "./AppFooter";

export default class LoginScreen extends Component<{}> {
    render(){
        return (
            <View style={styles.container}>
                {/*<Navigator></Navigator>*/}
                {/*<View style={{flexDirection: 'row',alignSelf: 'flex-end'}}>*/}
                    {/*<AppFooter/>*/}
                {/*</View>*/}
            </View>
        )
    }
};

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
