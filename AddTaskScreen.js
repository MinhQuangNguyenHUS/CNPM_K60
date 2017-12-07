
import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,  TextInput,
    //StatusBar, Image, TouchableOpacity,
} from 'react-native';
// import EvilIcons from "react-native-vector-icons/EvilIcons";
// import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/Feather';


export default class AddTaskScreen extends Component<{}>{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <View style={{backgroundColor: 'skyblue', height:50, flexDirection:'row'}}>
                        <view>
                            <Ionicons
                                marginTop={10}
                                marginLeft={50}
                                flex={1}
                                name='ios-close'
                                size={60}/>
                        </view>
                        <Text style={{flex: 3, marginTop:10, justifyContent:'center'}}>Add new task</Text>
                        <view>
                            <Icon
                                marginTop={40}
                                flex={1}
                                name='check'
                                size={30}/>
                        </view>

                    </View>
                    <View>
                        <TextInput
                            placeholder="Add title"
                            placeholderTextColor="gray"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"/>
                        <Text style={{Color:'black'}}> Meeting at ABC Coffee </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <TextInput
                                flex={1}
                                // keyboardType="date"
                                placeholder="Start date"
                                placeholderTextColor="gray"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"/>
                            <Text style={{Color:'black'}}> Date </Text>
                        </View>
                        <View>
                            <TextInput
                                flex={1}
                                // keyboardType="date"
                                placeholder="End date"
                                placeholderTextColor="gray"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"/>
                            <Text style={{Color:'black'}}> Date </Text>
                        </View>
                    </View>


                </View>
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
