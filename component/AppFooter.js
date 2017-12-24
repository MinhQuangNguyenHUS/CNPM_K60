import React, {Component} from 'react';
import {
    StyleSheet, TouchableOpacity, View,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
export default class AppFooter extends Component<{}> {
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#5882ff'}}>
                <View style={styles.component}>
                <TouchableOpacity>
                    <Ionicons
                        name='ios-home-outline'
                        size={40}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.component}>
                <TouchableOpacity>
                    <EvilIcons
                        name='check'
                        size={40}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                </View>
                {/*<View style={styles.component}>*/}
                {/*<TouchableOpacity>*/}
                    {/*<EvilIcons*/}
                        {/*name='chart'*/}
                        {/*size={40}*/}
                        {/*style={styles.icon}*/}
                    {/*/>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
                {/*<View style={styles.component}>*/}
                {/*<TouchableOpacity>*/}
                    {/*<EvilIcons*/}
                        {/*name='gear'*/}
                        {/*size={40}*/}
                        {/*style={styles.icon}*/}
                    {/*/>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    component: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        // backgroundColor: 'white'
    },
    icon: {
        color: 'black',
        marginHorizontal: 35,
    },
});
