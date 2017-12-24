import React, {Component} from 'react';
import {View, Dimensions, Text, TouchableOpacity,  StyleSheet} from 'react-native';
import TodoModel from '../component/TodoModel';
import OmniBox from '../component/OmniBox';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from '../component/ListViewItem';
import Utils from '../component/Utils';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const {width} = Dimensions.get('window');
let dataList = [
    new TodoModel('Hello All'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club')
];

var dataListOrder = getOrder(dataList);

function getOrder(list) {
    return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
    Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
    if (listView.forceUpdate) listView.forceUpdate();
}

export default class ListView extends Component {
    static navigationOptions = ({
        header: null,
    });
    constructor(props) {
        super(props);
        this.updateDataList = this.updateDataList.bind(this);
        this._onCompletedChange = this._onCompletedChange.bind(this);
        this.state = {
            dataList: dataList
        }
    }

    updateDataList(dataList) {
        dataListOrder = getOrder(dataList);
        this.setState({
            dataList: dataList
        });
    }

    _onCompletedChange(dataItem, index) {
        let fromIndex = dataListOrder.indexOf(index);
        let toIndex = dataItem.completed ? dataListOrder.length - 1 : 0;
        moveOrderItem(this, fromIndex, toIndex);
    }

    render() {
        const {username} = this.props.navigation.state.params;

        let listView = (<View></View>);
        if (this.state.dataList.length) {
            listView = (
                <SortableListView
                    ref='listView'
                    style={{flex: 1}}
                    data={this.state.dataList}
                    order={dataListOrder}
                    onRowMoved={e => moveOrderItem(this, e.from, e.to)}
                    renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} dataIndex={index}
                                                                           onCompletedChange={this._onCompletedChange}/>}
                />
            );
        }

        return (
            <View style={{flex: 1}}>
                <View style={{width: width, height: 60, backgroundColor: '#5882ff', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, color: 'white', fontFamily: 'Montserrat-Light'}}>Your Task</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingTop: 30,
                    paddingBottom: 10,
                    paddingLeft: 2,
                    paddingRight: 2,
                    backgroundColor: '#F8F8F8',
                }}>
                    <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                        <OmniBox
                            data={dataList}
                            updateDataList={this.updateDataList}/>
                        {listView}
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