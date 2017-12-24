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
import  MyCheckbox from "./MyCheckbox.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Feather";


export default class AddTaskScreen extends Component<{}>{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                    <View style={{backgroundColor: 'skyblue', height:50, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>{/*title*/}
                        <TouchableOpacity>
                            <Ionicons
                                style={{marginLeft:15}}
                                name='ios-close'
                                size={58}/>
                        </TouchableOpacity>
                        <Text>Add new task</Text>
                        <TouchableOpacity>
                            <Icon
                                style={{marginRight: 15}}
                                name='check'
                                size={35}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth:1, borderBottomColor: '#919191'}}>{/*meeting*/}
                        <TextInput style={{marginLeft: 30}}
                            placeholder="Add title"
                            placeholderTextColor="gray"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"/>
                        <Text style={{marginLeft: 30, color:'black',paddingBottom:10 }}> Meeting at ABC Coffee </Text>
                    </View>
                    <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#919191'}}>{/*datepicker*/}
                        <View style={{flex: 1, marginLeft: 30}}>
                            <Text style={{color:'gray'}}> Start date </Text>
                            <MyDatePicker style={{marginRight:10}}/>
                        </View>
                        <View style={{flex: 1, marginRight:30 ,borderLeftWidth:1, borderLeftColor: '#919191'}}>
                            <Text style={{color:'gray', marginLeft: 20,}}> End date </Text>
                            <MyDatePicker style={{ }}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#919191', marginTop:'20'}}>{/*all day check*/}
                        <View>
                                <MyCheckbox/>
                        </View>
                        <Text>ALL DAY</Text>
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
