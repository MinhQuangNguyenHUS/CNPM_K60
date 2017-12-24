import React, { Component } from 'react';
import {
    TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box'

export default class MyCheckBox extends Component<{}>{
    check = false;
    constructor() {
        super();
    }

    render() {
        return (

                <CheckBox
                    style={{flex: 1, padding: 10,  marginLeft:20}}
                    checkBoxColor="#919191"
                    onClick={() => {this.check = true}}
                    isChecked={this.check}
                />
            // <TouchableOpacity onClick={()=> this.check = true}>
            // </TouchableOpacity>
        )
    }
}