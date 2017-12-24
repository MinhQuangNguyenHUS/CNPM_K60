import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppFooter from '../component/AppFooter'
import App from "../App";
export default class HomeScreen extends Component<{}> {
    static navigationOptions = ({
        header: null,
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    hidden={true}
                />
                <LinearGradient colors={['#eaeaea', '#eaeaea']} style={styles.linnear}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{color: 'black', fontFamily: 'Montserrat-Light', fontSize: 40, marginTop: 20}}>App Name</Text>
                        <View style={{
                            borderWidth: 5,
                            backgroundColor: 'white',
                            borderColor: '#5882ff',
                            borderRadius: 10,
                            width: 200,
                            marginTop: 50,
                            padding: 5
                        }}>
                            <Text>fdajfhdlafjdkjaflkjdklafjlkdsajflkdjalkfjdla</Text>
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
                    <View style={{flexDirection: 'row',alignSelf: 'flex-end'}}>
                        <AppFooter/>
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
});
