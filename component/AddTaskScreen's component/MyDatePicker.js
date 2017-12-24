import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {date: "2017-12-26"}
    }

    render(){
        return (
            <DatePicker
                style={{width: 140, marginTop:10, marginBottom:15}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2017-01-01"
                maxDate="2017-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
        )
    }
}