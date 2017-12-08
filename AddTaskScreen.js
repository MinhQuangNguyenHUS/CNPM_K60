import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,  TextInput,
    //StatusBar, Image,
    TouchableOpacity,
} from 'react-native';
import  MyDatePicker from "./MyDatePicker.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Feather";


export default class AddTaskScreen extends Component<{}>{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <View style={{backgroundColor: 'skyblue', height:50, flexDirection:'row'}}>{/*title*/}
                        <TouchableOpacity>
                            <Ionicons
                                style={{marginLeft:15   , flex: 1 }}
                                name='ios-close'
                                size={58}/>
                        </TouchableOpacity>
                        <Text style={{flex: 3, justifyContent:'center'}}>Add new task</Text>
                        <TouchableOpacity>
                            <Icon
                                style={{marginRight: 20,marginTop:4, flex: 1}}
                                name='check'
                                size={35}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: 30, borderBottom:10}}>{/*meeting*/}
                        <TextInput
                            placeholder="Add title"
                            placeholderTextColor="gray"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"/>
                        <Text style={{color:'black'}}> Meeting at ABC Coffee </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>{/*datepicker*/}
                        <View style={{flex: 1, marginLeft: 30}}>
                            <MyDatePicker style={{marginRight:10}}/>
                            <Text style={{color:'black'}}> Date </Text>
                        </View>
                        <View style={{flex: 1, marginLeft: 30}}>
                            <MyDatePicker/>
                            {/*<TextInput*/}
                                {/*style={{flex: 1}}*/}
                                {/*// keyboardType="date"*/}
                                {/*placeholder="End date"*/}
                                {/*placeholderTextColor="gray"*/}
                                {/*returnKeyType="next"*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*underlineColorAndroid="transparent"/>*/}
                            <Text style={{color:'black'}}> Date </Text>
                        </View>
                    </View>
                    <View>{/*all day check*/}

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
