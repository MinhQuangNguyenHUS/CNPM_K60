import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class HomeScreen extends Component<{}> {
    static navigationOptions = ({
        header: null,
    });

    constructor(){
        super();
    }
    render() {
        const {username} = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    hidden={true}
                />
                <LinearGradient colors={['#eaeaea', '#eaeaea']} style={styles.linnear}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{color: 'black', fontFamily: 'Montserrat-Light', fontSize: 40, marginTop: 20}}>App
                            Name</Text>
                        <View style={{
                            borderWidth: 5,
                            backgroundColor: 'white',
                            borderColor: '#5882ff',
                            borderRadius: 10,
                            width: 200,
                            marginTop: 50,
                            padding: 5
                        }}>
                            <Text>Have a good day {username}</Text>
                        </View>
                        <View style={{marginTop: 50, flexDirection: 'row'}}>
                            <Image
                                style={{width: 220, height: 251,}}
                                source={require('../assets/image/Watermelon.png')}
                            />
                            <View style={{flexDirection: 'column'}}>
                                <Text>Today's schedule</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            backgroundColor: '#5882ff'
                        }}>
                            <View style={styles.component}>
                                <TouchableOpacity onclick={() => {this.props.navigation.navigate('homeScreen', {username: username})}}>
                                    <Ionicons
                                        name='ios-home-outline'
                                        size={40}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.component}>
                                <TouchableOpacity onclick={() => {this.props.navigation.navigate('listScreen', {username: username})}}>
                                    <EvilIcons
                                        name='check'
                                        size={40}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    component: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    icon: {
        color: 'black',
        marginHorizontal: 35,
    },
});
