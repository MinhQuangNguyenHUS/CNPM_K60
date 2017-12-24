import React, {Component} from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import Navigator from "./Navigator";

export default class App extends Component<{}> {
    render(){
        return (
            <View style={styles.container}>
                <Navigator></Navigator>
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
